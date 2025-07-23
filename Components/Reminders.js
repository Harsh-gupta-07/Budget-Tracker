import React, { useState } from "react";
import Image from "next/image";
import EditReminder from "./modals/EditReminder";
import { useBudget } from "@/app/context/BudgetContext";
import AddExpenseModal from "./modals/AddExpense";
import AddReminderModal from "./modals/AddReminder";

const ConfirmDeleteReminder = ({ visible, details }) => {
  const { deleteReminder } = useBudget();
  return (
    <dialog
      id="confirm_delete_category_modal"
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
        <h3 className="font-bold text-lg mb-4">Delete Reminder</h3>

        <div className="py-4">
          <p className="text-lg mb-2">
            Are you sure you want to delete this reminder?
          </p>

          <p className="text-sm text-red-400 mt-2">
            Warning: This action cannot be undone.
          </p>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={visible}>
            Cancel
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              deleteReminder(details?.id);
              visible();
            }}
          >
            Delete Reminder
          </button>
        </div>
      </div>
    </dialog>
  );
};

const Reminders = () => {
  const { categories, reminders, deleteReminder } = useBudget();

  const dueDate = (date) => {
    const today = new Date();
    const dueDate = new Date(date);

    const diffTime = dueDate - today;

    if (diffTime < 0) return 0;

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const wordDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const [editReminder, setEditReminder] = useState(false);
  const [details, setDetails] = useState(null);
  const [confirmDeleteReminder, setConfirmDeleteReminder] = useState(false);
  const [addExpense, setAddExpense] = useState(false);
  const [addReminder, setAddReminder] = useState(false);
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-12 pb-5">
        {reminders.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center p-8 bg-base-300 rounded-2xl">
            <p className="text-gray-500 mb-4">No reminders found</p>
            <button
              onClick={() => setAddReminder(true)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Create your first reminder
            </button>
          </div>
        ) : (
          reminders.map((val, ind) => {
            const remDays = dueDate(val.date);
            return (
              <div
                key={ind}
                className={`p-5 rounded-lg shadow-sm border border-gray-700 bg-[#181a1b] ${
                  remDays <= 5 ? "bg-[#630404] border-red-500" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/notifications.svg"
                      alt="noti"
                      width={20}
                      height={20}
                    />
                    <h4 className="font-medium text-gray-300">{val.title}</h4>
                  </div>
                  <span className="text-xs bg-gray-800 text-[#449ff6] px-2 py-1 rounded-full">
                    {categories[val.category].category}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-sm text-gray-400 ">
                    {`${remDays} Days Left, (${wordDate(val.date)})`}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium font-mono">{`₹ ${val.amount}`}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setDetails({
                          id: val.id,
                          description: val.title,
                          amount: val.amount,
                          category: val.category,
                          date: val.date,
                        });
                        setAddExpense(!addExpense);
                      }}
                      className="w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg"
                    >
                      <Image
                        src="/plus-skincol.svg"
                        alt="reminder"
                        width={16}
                        height={16}
                      />
                    </button>
                    <button
                      onClick={() => {
                        setDetails({
                          id: val.id,
                          title: val.title,
                          amount: val.amount,
                          category: val.category,
                          date: val.date,
                        });
                        setEditReminder(!editReminder);
                      }}
                      className="w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg"
                    >
                      <Image
                        src="/edit.svg"
                        alt="edit"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      onClick={() => {
                        setDetails({
                          id: val.id,
                          title: val.title,
                          amount: val.amount,
                          category: val.category,
                          date: val.date,
                        });
                        setConfirmDeleteReminder(!confirmDeleteReminder);
                      }}
                      className="w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg"
                    >
                      <Image
                        src="/delete.svg"
                        alt="edit"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {editReminder && (
        <EditReminder
          visible={() => setEditReminder(!editReminder)}
          details={details}
        />
      )}
      {confirmDeleteReminder && (
        <ConfirmDeleteReminder
          visible={() => setConfirmDeleteReminder(!confirmDeleteReminder)}
          details={details}
        />
      )}
      {addExpense && (
        <AddExpenseModal
          visible={() => setAddExpense(!addExpense)}
          details={details}
        />
      )}
      {addReminder && (
        <AddReminderModal
          visible={() => {
            setAddReminder(false);
          }}
        />
      )}
    </div>
  );
};

export default Reminders;
