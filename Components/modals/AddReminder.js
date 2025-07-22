"use client";
import Image from "next/image";
import React, { use, useRef, useState } from "react";
import { useBudget } from "@/app/context/BudgetContext";

const AddReminderModal = ({ visible }) => {

  const { addReminder, categories } = useBudget();
  const [catDropDown, setcatDropDown] = useState(false);
  const [cat, setCat] = useState(-1);
  const amount = useRef(0);
  const remName = useRef("");
  const date = useRef(null);
  const [emtName, setEmtName] = useState(false);
  const [emtAmt, setEmtAmt] = useState(false);
  const [emtCat, setEmtCat] = useState(false);
  const [emtDate, setEmtDate] = useState(false);
  const [loading, setLoading] = useState(false);


  function handle() {
    setLoading(true)
    // console.log(amount.current.value, remName.current.value, cat);
    if (!remName.current.value || remName.current.value.length < 3){
      setEmtName(true)
      setLoading(false)
      return
    }else{
      setEmtName(false)
    }

    const temp = parseInt(amount.current.value)
    if (temp===0|| isNaN(temp)){
      setEmtAmt(true)
      setLoading(false)
      return
    }else{
      setEmtAmt(false)
    }

    if (!date.current.value){
      setEmtDate(true)
      setLoading(false)
      return
    }else{
      setEmtDate(false)
    }

    if(cat === -1){
      setEmtCat(true)
      setLoading(false)
      return
    }else{
      setEmtCat(false)
    }

    addReminder({
      title: remName.current.value,
      amount: amount.current.value,
      date: date.current.value,
      category: cat,
    });
    setTimeout(()=>{visible(); setLoading(false)},1000)
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  

  return (
    <dialog
      id="add_reminder_modal"
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
        <h3 className="font-bold text-lg mb-4">Add New Reminder</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-white pb-2">Reminder Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rent Payment"
              className="input bg-[#181a1b] input-bordered w-full text-white focus:outline-none"
              ref={remName}
              maxLength={15}
            />
            {emtName && (
              <p className="text-xs text-red-600 py-1">
                Please Enter Name for the Reminder of minimum 3 characters.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white py-2">Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input bg-[#181a1b] input-bordered w-full text-white focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
              <span className="label-text text-white py-2">Due Date</span>
            </label>
            <input
              type="date"
              className="input bg-[#181a1b] input-bordered w-full text-white focus:outline-none"
              ref={date}
              min={minDate}
            />
            {emtDate && (
              <p className="text-xs text-red-600 py-1">Please Select a Date.</p>
            )}
          </div>

          
          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Category</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className="focus:outline-none bg-[#181a1b] input input-bordered w-full text-left text-white flex justify-between items-center"
                onClick={() => setcatDropDown(!catDropDown)}
              >
                {cat === -1 ? (
                  "Select a Category"
                ) : (
                  <div className="flex items-center px-4 py-2 pl-1  cursor-pointer">
                    <Image
                      src={`/${categories[cat].icon}.svg`}
                      width={24}
                      height={24}
                      alt={categories[cat].icon}
                      className="mr-3 text-lg"
                    />
                    <span>{categories[cat].category}</span>
                  </div>
                )}
                <span className="ml-2">▾</span>
              </button>
              {catDropDown && (
                <ul className="absolute bottom-full mb-1 w-full bg-[#181a1b] rounded-md shadow-lg  z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2 hover:bg-[#2e3132] cursor-pointer ${
                        index === cat ? "bg-black" : ""
                      }`}
                      onClick={() => {
                        setcatDropDown(false);
                        setCat(index);
                      }}
                    >
                      <Image
                        src={`/${item.icon}.svg`}
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
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handle}>
            {loading? <span className="loading loading-spinner"></span>: "Save Reminder"}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AddReminderModal;
