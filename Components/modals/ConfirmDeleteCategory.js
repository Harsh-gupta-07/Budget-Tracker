import React from 'react'
import { useBudget } from '@/app/context/BudgetContext';

const ConfirmDeleteCategory = ({visible, details}) => {
    // console.log(details);
    const {deleteCategory} = useBudget();
    
  return (
    <dialog
      id="confirm_delete_category_modal"
      className="modal modal-open"
      onClick={() => {
        visible();
      }}
    >
      <div
        className="modal-box max-w-md w-full sm:w-11/12 bg-[#1c1e1f] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => visible()}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Delete Category</h3>

        <div className="py-4">
          <p className="text-lg mb-2">Are you sure you want to delete this category?</p>
          <p className="text-sm text-gray-400">
            Category: <span className="font-semibold">{details?.name}</span>
          </p>
          <p className="text-sm text-red-400 mt-2">
            Warning: This action cannot be undone. All transactions associated with this category will be also be deleted.
          </p>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={visible}>
            Cancel
          </button>
          <button 
            className="btn btn-error" 
            onClick={() => {
            deleteCategory(details?.id);
            visible();
            }}
          >
            Delete Category
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ConfirmDeleteCategory