"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useBudget } from "@/app/context/BudgetContext";

const AddCategoryModal = ({ visible }) => {
  const [icon, setIcon] = useState("basket");
  const catName = useRef("");
  const amount = useRef(0);
  const [emtCat, setEmtCat] = useState(false);
  const [emtAmt, setAmtCat] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addCategory } = useBudget();
  function handle() {
    setLoading(true);

    // console.log(
    //   { icon: icon, category: catName.current.value },
    //   amount.current.value
    // );
    if (catName.current.value === "" || catName.current.value.length < 3) {
      setEmtCat(true);
      setLoading(false)
      return;
    } else {
      setEmtCat(false);
    }

    const amountValue = Number(amount.current.value);
    if (isNaN(amountValue) || amountValue === 0 || amountValue>1000000) {
      setLoading(false)
      setAmtCat(true);
      return;
    } else {
      setAmtCat(false);
    }

    addCategory({
      category: catName.current.value,
      icon,
      budget: amountValue,
      spent: 0,
    });
    setTimeout(()=>{visible(); setLoading(false)},1000)
  }

  return (
    <dialog
      id="add_category_modal"
      className="modal modal-open "
      onClick={() => visible()}
    >
      <div
        className="modal-box bg-[#1c1e1f] max-w-md w-full sm:w-11/12"
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
              className="input input-bordered w-full focus:outline-none bg-[#181a1b]"
              maxLength={15}
              ref={catName}
            />
            {emtCat && (
              <p className="text-xs text-red-600 py-1">
                Please Enter a Category Name of length 3 or more.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Monthly Budget Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="Max amount &#8377;1000000"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              ref={amount}
            />
            {emtAmt && (
              <p className="text-xs text-red-600 py-1">Enter a Valid Amount</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2">Icon</span>
            </label>
            <div className="grid grid-cols-6 gap-3 bg-[#181a1b] p-4 rounded">
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
                    src={`/${item}.svg`}
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
          <button className="btn btn-primary" onClick={handle}>
            {loading? <span className="loading loading-spinner"></span>: "Create Category"}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AddCategoryModal;
