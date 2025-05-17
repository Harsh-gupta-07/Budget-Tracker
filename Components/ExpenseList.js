import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditExpense from "./modals/EditExpense";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    {
      date: "2025-03-15",
      category: "Personal",
      description: "Dinner with friends",
      amount: 48.75,
    },
    {
      date: "2025-01-01",
      category: "Utilities",
      description: "Dinner with friends",
      amount: 48.75,
    },
    {
      date: "2025-12-20",
      category: "Transportation",
      description: "Dinner with friends",
      amount: 48.75,
    },
    {
      date: "2025-8-27",
      category: "Personal",
      description: "Dinner with friends",
      amount: 48.75,
    },
    
  ]);

  const months = {1:"January",2:"Feburary",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}
  const [editExpense,setEditExpense] = useState(false)
  const [details, setDetails] = useState(null)

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
            {expenses.map((val,ind) => {
              const temp = val.date.split("-")
              return (
                <tr key={ind} className="border-b border-gray-600 text-gray-400 hover:bg-[#131515]">
                  <td className="p-4 align-middle text-sm ">{`${Number(temp[2])} ${months[Number(temp[1])]}, ${temp[0]}`}</td>
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
                      setDetails({amount: val.amount, category: val.category, desc: val.description, date: val.date})
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
      {editExpense && (<EditExpense visible={()=>{setEditExpense(!editExpense)}} details={details}/>)}
    </div>
    
  );
};

export default ExpenseList;
