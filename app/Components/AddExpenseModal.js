import React, { useState } from "react";

const AddExpenseModal = ({ visible }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <dialog
      id="add_expense_modal"
      className="modal modal-open"
      onClick={() => visible()}
    >
      <div
        className="modal-box max-w-md w-full sm:w-11/12 bg-base-100 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => visible()}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Add New Expense</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input input-bordered w-full focus:outline-none text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Category</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className="focus:outline-none input input-bordered w-full text-left text-white flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Select a category
                <span className="ml-2">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute mt-1 w-full rounded-md shadow-lg bg-base-100 z-10 border border-gray-700">
                  {[
                    { icon: "🛒", label: "Groceries" },
                    { icon: "💡", label: "Utilities" },
                    { icon: "🚗", label: "Transportation" },
                    { icon: "🍽️", label: "Dining Out" },
                    { icon: "🎬", label: "Entertainment" },
                    { icon: "🛍️", label: "Shopping" }
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center px-4 py-2 hover:bg-base-300 cursor-pointer"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Description</span>
            </label>
            <input
              type="text"
              placeholder="Describe this expense"
              className="input input-bordered w-full focus:outline-none text-white"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full focus:outline-none text-white"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text ml-3 text-white">
                This is a recurring expense
              </span>
            </label>
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary">Save Expense</button>
        </div>
      </div>
    </dialog>
  );
};

export default AddExpenseModal;