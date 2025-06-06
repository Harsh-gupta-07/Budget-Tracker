"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useBudget } from "@/app/context/BudgetContext";

const EditExpense = ({ visible, details }) => {
  const { categories, updateTransaction } = useBudget();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [val, setVal] = useState(details.amount);
  const [cat, setCat] = useState(details.category);
  const [oth, setOth] = useState(details.description);
  const [date, setDate] = useState(details.date);
  const [emtDesc, setEmtDesc] = useState(false);
  const [emtAmt, setEmtAmt] = useState(false);
  
  const handleSave = () => {
    if (oth.length <=0){
      setEmtDesc(true);
      return
    }else{
      setEmtDesc(false);
    }

    if (val <=0 || isNaN(val)){
      setEmtAmt(true);
      return
    }else{
      setEmtAmt(false);
    }

    updateTransaction({...details, amount: val, category: cat, description: oth, date: date, id: details.id});
    visible();
  };

  return (
    <dialog
      id="add_expense_modal"
      className="modal modal-open"
      onClick={() => visible()}
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
        <h3 className="font-bold text-lg mb-4">Edit Expense</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={val}
              onChange={(e) => {
                setVal(Number(e.target.value));
              }}
            />
            {emtAmt && <p className="text-red-500 text-sm">Amount is required</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Category</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className="focus:outline-none bg-[#181a1b] input input-bordered w-full text-left text-white flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p className="flex items-center pl-1 px-4 py-2 cursor-pointer">
                  <Image
                    src={`/${categories[cat].icon}.svg`}
                    width={24}
                    height={24}
                    alt={categories[cat].icon}
                    className="mr-3 text-lg"
                  />
                  <span>{categories[cat].category}</span>
                </p>

                <span className="ml-2">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute mt-1 w-full rounded-md shadow-lg bg-[#181a1b] z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2 hover:bg-[#2e3132] cursor-pointer ${
                        cat === item.label ? "bg-black" : ""
                      }`}
                      onClick={() => {
                        setDropdownOpen(false), setCat(item.id);
                      }}
                    >
                      <Image
                        src={`./${item.icon}.svg`}
                        width={24}
                        height={24}
                        alt={item.icon}
                        className="mr-3 text-lg"
                      />
                      <span>{item.category}</span>
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
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none text-white"
              value={oth}
              onChange={(e) => {
                setOth(e.target.value);
              }}
            />
            {emtDesc && <p className="text-red-500 text-sm">Description is required</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Date</span>
            </label>
            <input
              type="date"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none text-white"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>Save Expense</button>
        </div>
      </div>
    </dialog>
  );
};

export default EditExpense;
