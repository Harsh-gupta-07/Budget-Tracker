import React from "react";

const AddCategoryModal = ({visible}) => {
  return (
    <dialog
      id="add_category_modal"
      className="modal modal-open "
      onClick={() => visible()}
    >
      <div
        className="modal-box max-w-md w-full sm:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => visible()}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Add Budget Category</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text mb-2">Category Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Groceries"
              className="input input-bordered w-full focus:outline-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Monthly Budget Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input input-bordered w-full focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Icon</span>
            </label>
            <div className="grid grid-cols-6 gap-3 bg-base-200 p-4 rounded">
              {[
                "basket",
                "bulb",
                "car",
                "fork-knife",
                "film",
                "bag",
                "home",
                "dumbbell",
                "graduation-cap",
                "hospital",
                "credit-card",
                "dollar-sign",
                "piggy-bank",
                "gift",
                "paw",
                "smile",
                "plane",
                "wifi",
                "mobile",
              ].map((icon, idx) => (
                <button
                  key={idx}
                  className="btn btn-square btn-sm bg-base-100 hover:bg-primary-focus"
                >
                  <i className={`icon-${icon}`}></i>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary">Create Category</button>
        </div>
      </div>
    </dialog>
  );
};

export default AddCategoryModal;
