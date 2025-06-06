import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditExpense from "./modals/EditExpense";
import { useBudget } from "@/app/context/BudgetContext";

const ConfirmDeleteExpense = ({ visible, details }) => {
  const {deleteTransaction} = useBudget();
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
        <h3 className="font-bold text-lg mb-4">Delete Transaction</h3>

        <div className="py-4">
          <p className="text-lg mb-2">
            Are you sure you want to delete this transaction?
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
              deleteTransaction(details?.id);
              visible();
            }}
          >
            Delete Category
          </button>
        </div>
      </div>
    </dialog>
  );
};

const ExpenseList = () => {
  const { transactions, categories } = useBudget();

  const months = {
    1: "January",
    2: "Feburary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const [editExpense, setEditExpense] = useState(false);
  const [details, setDetails] = useState(null);
  const [deleteExpense, setDeleteExpense] = useState(false);
  // Sort transactions by date in descending order (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="bg-[#1c1e1f] py-3 lg:px-12 ">
      <div className="overflow-x-auto">
        <table className="min-w-full caption-bottom text-sm">
          <thead className="">
            <tr className="border-b border-gray-600 bg-[#1c1e1f] ">
              <th className="h-12 px-4 text-left text-gray-300 align-middle font-medium text-xs uppercase">
                Date
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-xs uppercase">
                Category
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-xs uppercase">
                Description
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-xs uppercase">
                Amount
              </th>
              <th className="h-12 px-4 align-middle font-medium text-xs uppercase text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#181a1b] ">
            {sortedTransactions.map((val, ind) => {
              const temp = val.date.split("-");
              return (
                <tr
                  key={ind}
                  className="border-b border-gray-600 text-gray-400 hover:bg-[#131515]"
                >
                  <td className="p-4 align-middle text-sm ">{`${Number(
                    temp[2]
                  )} ${months[Number(temp[1])]}, ${temp[0]}`}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center">
                      {categories[val.category].category}
                    </div>
                  </td>
                  <td className="p-4 align-middle text-sm">
                    {val.description === "" ? "None" : val.description}
                  </td>
                  <td className="p-4 align-middle text-sm font-medium  font-mono">
                    {`$${val.amount}`}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end items-center gap-2">
                      <button
                        onClick={() => {
                          setDetails({
                            amount: val.amount,
                            category: val.category,
                            description: val.description,
                            date: val.date,
                            id: val.id,
                          });
                          setEditExpense(!editExpense);
                        }}
                        className="rounded-md h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-black"
                      >
                        <Image
                          src="/edit.svg"
                          alt="edit"
                          width={22}
                          height={22}
                        />
                      </button>
                      <button
                        onClick={() => {
                          setDetails({ id: val.id });
                          setDeleteExpense(!deleteExpense);
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {editExpense && (
        <EditExpense
          visible={() => {
            setEditExpense(!editExpense);
          }}
          details={details}
        />
      )}
      {deleteExpense && (
        <ConfirmDeleteExpense
          visible={() => {
            setDeleteExpense(!deleteExpense);
          }}
          details={details}
        />
      )}
    </div>
  );
};

export default ExpenseList;
