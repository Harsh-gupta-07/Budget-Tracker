"use client"
import Image from "next/image";
import React,{ useState} from "react";

const EditExpense = ({ visible, details }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [val,setVal] = useState(details.amount)
  const [cat,setCat] = useState(details.category===""?"Select a Category":details.category)
  const [oth,setOth] = useState(details.desc)
  const [date,setDate] = useState(details.date)
  console.log(details.date)
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
              onChange={(e)=>{setVal(Number(e.target.value))}}
            />
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
                {cat}
                <span className="ml-2">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute mt-1 w-full rounded-md shadow-lg bg-[#181a1b] z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {[
                    {icon: "basket", label:"Personal"},
                    { icon: "bulb", label: "Utilities" },
                    { icon: "car", label: "Transportation" },
                    { icon: "fork-knife", label: "Dining Out" },
                    { icon: "play", label: "Entertainment" },
                    { icon: "bag", label: "Shopping" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2 hover:bg-[#2e3132] cursor-pointer ${cat===item.label?"bg-black":""}`}
                      onClick={() => {setDropdownOpen(false),setCat(item.label)}}
                    >
                      <Image
                        src={`./${item.icon}.svg`}
                        width={24}
                        height={24}
                        alt={item.icon}
                        className="mr-3 text-lg"
                      />
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
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none text-white"
              value={oth}
              onChange={(e)=>{setOth(e.target.value)}}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Date</span>
            </label>
            <input
              type="date"
              className="input bg-[#181a1b] input-bordered w-full focus:outline-none text-white"
              value={date}
              onChange={(e)=>{setDate(e.target.value)}}
            />
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

export default EditExpense;
