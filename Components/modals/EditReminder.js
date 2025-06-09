import Image from "next/image";
import React, { use, useState } from "react";
import { useBudget } from "@/app/context/BudgetContext";

const EditReminder = ({ visible, details }) => {
  const [catDropDown, setcatDropDown] = useState(false);
  const [cat, setCat] = useState(details.category);
  const [name, setName] = useState(details.title);
  const [val, setVal] = useState(details.amount);
  const [date, setDate] = useState(details.date);
  const { categories, editReminder } = useBudget();
  const [emtName, setEmtName] = useState(false);
  const [emtAmt, setEmtAmt] = useState(false);
  const [emtCat, setEmtCat] = useState(false);
  const [emtDate, setEmtDate] = useState(false);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleSave = () => {
    if (!name || name.length < 3) {
      setEmtName(true);
      return;
    }else{
      setEmtName(false);
    }

    const temp = parseInt(val)
    if (temp===0|| isNaN(temp)){
      setEmtAmt(true)
      return
    }else{
      setEmtAmt(false)
    } 
    
    
    if (!date) {
      setEmtDate(true);
      return;
    }else{
      setEmtDate(false);
    }
    if (cat === -1) {
      setEmtCat(true);
      return;
    }else{
      setEmtCat(false);
    }
    editReminder(details.id, {
      id: details.id,
      title: name,
      amount: temp,
      date: date,
      category: cat,
    });
    visible();
  }

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
        <h3 className="font-bold text-lg mb-4">Edit Reminder</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-white pb-2">Reminder Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rent Payment"
              className="input bg-[#181a1b] input-bordered w-full text-white focus:outline-none"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              value={val}
              onChange={(e) => {
                setVal((e.target.value));
              }}
            />
            {emtAmt && (
              <p className="text-xs text-red-600 py-1">
                Please Enter Amount for the Reminder.
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white py-2">Due Date</span>
            </label>
            <input
              type="date"
              min={minDate}
              className="input bg-[#181a1b] input-bordered w-full text-white focus:outline-none"
              defaultValue={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            {emtDate && (
              <p className="text-xs text-red-600 py-1">
                Please Enter Date for the Reminder.
              </p>
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
              </button>
              {catDropDown && (
                <ul className=" absolute bg-[#181a1b] bottom-full mt-1 w-full rounded-md shadow-lg z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2 hover:bg-[#2e3132] cursor-pointer ${
                        item.id === cat ? "bg-black" : ""
                      }`}
                      onClick={() => {
                        setcatDropDown(false);
                        setCat(item.id);
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
                Please Select a Category for the Reminder.
              </p>
            )}
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={visible}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save Reminder
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default EditReminder;
