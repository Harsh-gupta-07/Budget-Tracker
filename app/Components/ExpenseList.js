import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditExpense from "./modals/EditExpense";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    {
      date: "April 30, 2025",
      category: "Personal",
      description: "Dinner with friends",
      amount: 48.75,
    },
    {
      date: "April 30, 2025",
      category: "Utilities",
      description: "Dinner with friends",
      amount: 48.75,
    },
    {
      date: "April 30, 2025",
      category: "Transportation",
      description: "Dinner with friends",
      amount: 48.75,
    },
    {
      date: "April 30, 2025",
      category: "Personal",
      description: "Dinner with friends",
      amount: 48.75,
    },
    
  ]);
  const [editExpense,setEditExpense] = useState(false)
  const [val,setVal] = useState(0)
    const [cat,setCat] = useState("")
    const [oth,setOth] = useState("")

  return (
    <div className="bg-base-100 py-3 px-12 ">
      <div className="overflow-x-auto">
        <table className="min-w-full caption-bottom text-sm">
          <thead className="">
            <tr className="border-b border-gray-600 bg-base-100 ">
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
          <tbody className="bg-base-200 ">
            {expenses.map((val,ind) => {
              return (
                <tr key={ind} className="border-b border-gray-600 text-gray-400 hover:bg-base-300">
                  <td className="p-4 align-middle text-sm ">{val.date}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center">{val.category}</div>
                  </td>
                  <td className="p-4 align-middle text-sm">
                    {val.description}
                  </td>
                  <td className="p-4 align-middle text-sm font-medium  font-mono">
                    {`$${val.amount}`}
                  </td>
                  <td className="p-4 align-middle text-right">
                    <button onClick={()=>{
                      setVal(Number(val.amount))
                      setCat(val.category)
                      setOth(val.description)
                      setEditExpense(!editExpense)
                    }} className="gap-2 text-sm hover:underline h-10 px-4 py-2 text-primary cursor-pointer">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {editExpense && (<EditExpense visible={()=>{setEditExpense(!editExpense)}} amount={val} dsc={oth} category={cat}/>)}
    </div>
    
  );
};

export default ExpenseList;
