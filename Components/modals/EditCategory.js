"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import { useBudget } from "@/app/context/BudgetContext";

const EditCategory = ({ visible, details }) => {
  const [icon, setIcon] = useState(details.icon);
  const [name, setName] = useState(details.category);
  const [bud, setbud] = useState(details.budget);

  const {updateCategory} = useBudget();

  const handleSave = () => {
    updateCategory({...details, icon, category: name, budget: bud});
    visible();
  };
  return (
    <dialog
      id="add_category_modal"
      className="modal modal-open "
      onClick={() => visible()}
    >
      <div
        className="modal-box max-w-md w-full bg-[#1c1e1f] sm:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => visible()}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Edit Budget Category</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text mb-2">Category Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Groceries"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Monthly Budget Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={bud}
              onChange={(e) => setbud(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Icon</span>
            </label>
            <div className="grid grid-cols-6 bg-[#181a1b] gap-3  p-4 rounded">
              {[
                "basket",
                "bulb",
                "car",
                "fork-knife",
                "play",
                "bag",
                "piggy-bank",
                "home",
                "dumbbell",
                "eduCap",
                "health",
                "creditCard",
                "dollar",
                "gift",
                "paw",
                "child",
                "plane",
                "wifi",
                "phone",
                "dots",
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`w-10 h-10 flex items-center justify-around hover:bg-black rounded-xl cursor-pointer ${
                    icon === item ? "bg-black" : ""
                  }`}
                  onClick={() => {
                    setIcon(item);
                  }}
                >
                  <Image
                    src={`${item}.svg`}
                    alt="item"
                    width={24}
                    height={24}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default EditCategory;
