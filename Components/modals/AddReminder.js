"use client";
import Image from "next/image";
import React, { useState } from "react";

const AddReminderModal = ({ visible }) => {
  const [catDropDown, setcatDropDown] = useState(false);
  const [freqDropDown, setFreqDropDown] = useState(false);
  const [time, setTime] = useState("Monthly");
  const [cat, setCat] = useState("Select a category");
  return (
    <dialog
      id="add_reminder_modal"
      className="modal modal-open"
      onClick={() => {
        visible();
      }}
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
        <h3 className="font-bold text-lg mb-4">Add New Reminder</h3>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-white pb-2">Reminder Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rent Payment"
              className="input input-bordered w-full text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white py-2">Amount ($)</span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="input input-bordered w-full text-white focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white py-2">Due Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full text-white focus:outline-none"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Frequency</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className="focus:outline-none input input-bordered w-full text-left text-white flex justify-between items-center"
                onClick={() => setFreqDropDown(!freqDropDown)}
              >
                Monthly
                <span className="ml-2">▾</span>
              </button>
              {freqDropDown && (
                <ul className=" absolute mt-1 w-full rounded-md shadow-lg bg-base-100 z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {[
                    "One-Time",
                    "Weekly",
                    "Bi-Weekly",
                    "Monthly",
                    "Quarterly",
                    "Anually",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2 hover:bg-base-300 cursor-pointer ${
                        item === time ? "bg-black" : ""
                      }`}
                      onClick={() => {
                        setFreqDropDown(false);
                        setTime(item);
                      }}
                    >
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text mb-2 text-white">Category</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className="focus:outline-none input input-bordered w-full text-left text-white flex justify-between items-center"
                onClick={() => setcatDropDown(!catDropDown)}
              >
                Select a category
                <span className="ml-2">▾</span>
              </button>
              {catDropDown && (
                <ul className=" absolute mt-1 w-full rounded-md shadow-lg bg-base-100 z-10 border border-gray-700 max-h-62 overflow-y-auto">
                  {[
                    { icon: "basket", label: "Groceries" },
                    { icon: "bulb", label: "Utilities" },
                    { icon: "car", label: "Transportation" },
                    { icon: "fork-knife", label: "Dining Out" },
                    { icon: "play", label: "Entertainment" },
                    { icon: "bag", label: "Shopping" },
                    { icon: "fork-knife", label: "Dining Out" },
                    { icon: "play", label: "Entertainment" },
                    { icon: "bag", label: "Shopping" },
                    { icon: "fork-knife", label: "Dining Out" },
                    { icon: "play", label: "Entertainment" },
                    { icon: "bag", label: "Shopping" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2 hover:bg-base-300 cursor-pointer ${
                        item === cat ? "bg-base-300" : ""
                      }`}
                      onClick={() => {
                        setcatDropDown(false);
                        setCat(item.label);
                      }}
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
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => visible()}>
            Cancel
          </button>
          <button className="btn btn-primary">Save Reminder</button>
        </div>
      </div>
    </dialog>
  );
};

export default AddReminderModal;
