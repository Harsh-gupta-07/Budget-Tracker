import Image from "next/image";
import React, { use, useRef, useState } from "react";
import { useBudget } from "@/app/context/BudgetContext";

const AddExpenseModal = ({ visible, category }) => {
  const {categories,addTransaction} = useBudget();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectCat, setSelectCat] = useState(isNaN(category)?-1:category);
  const desc = useRef("");
  const date = useRef(null);
  const amount = useRef(0.0);
  const [emtCat, setEmtCat] = useState(false);
  const [emtAmt, setEmtAmt] = useState(false);
  const [emtDate, setEmtDate] = useState(false);
  // console.log(category);
  
  function handle() {
    // console.log(
    //   desc.current.value,
    //   date.current.value,
    //   amount.current.value,
    //   selectCat
    // );

    const temp = Number(amount.current.value);
    if (temp <= 0 || isNaN(temp)) {
      setEmtAmt(true);
      return;
    } else {
      setEmtAmt(false);
    }

    if (selectCat < 0) {
      setEmtCat(true);
      return;
    } else {
      setEmtCat(false);
    }

    if (!date.current.value) {
      setEmtDate(true);
      return;
    } else {
      setEmtDate(false);
    }

    addTransaction({
      amount: temp,
      category: selectCat,
      date: date.current.value,
      description: desc.current.value,
    });
    visible();
  }

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
        <h3 className="font-bold text-lg mb-4">Add New Expense</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              ref={amount}
            />
            {emtAmt && (
              <p className="text-xs text-red-600 py-1">
                Please Enter a Valid Amount.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2  text-white">Category</span>
            </label>
            <div className="relative ">
              <button
                type="button"
                className="focus:outline-none bg-[#181a1b] input input-bordered w-full text-left text-white flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectCat < 0 || isNaN(selectCat) ? (
                  "Select a Category"
                ) : (
                  <p className="flex items-center pl-1 px-4 py-2 cursor-pointer">
                    <Image
                      src={`/${categories[selectCat].icon}.svg`}
                      width={24}
                      height={24}
                      alt={categories[selectCat].icon}
                      className="mr-3 text-lg"
                    />
                    <span>{categories[selectCat].category}</span>
                  </p>
                )}
                <span className="ml-2">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="bg-[#181a1b] absolute mt-1 w-full rounded-md shadow-lg  z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        selectCat === index ? "bg-black" : ""
                      } flex items-center px-4 py-2 hover:bg-[#2e3132] cursor-pointer`}
                      onClick={() => {
                        setDropdownOpen(false);
                        setSelectCat(index);
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
            {emtCat && (
              <p className="text-xs text-red-600 py-1">
                Please Select a Category.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Description</span>
            </label>
            <input
              type="text"
              placeholder="Describe this expense"
              className="bg-[#181a1b] input input-bordered w-full focus:outline-none text-white"
              maxLength={25}
              ref={desc}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Date</span>
            </label>
            <input
              type="date"
              className="bg-[#181a1b] input input-bordered w-full focus:outline-none text-white"
              ref={date}
              max={new Date().toISOString().split('T')[0]}
            />
            {emtDate && (
              <p className="text-xs text-red-600 py-1">Please Select a Date.</p>
            )}
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handle}>
            Save Expense
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AddExpenseModal;
