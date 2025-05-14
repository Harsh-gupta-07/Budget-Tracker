import React, { use, useState } from "react";
import Image from "next/image";
import EditReminder from "./modals/EditReminder";

const Reminders = () => {
  const [reminders, setReminders] = useState([
    {
      title: "Rent Payment",
      timeInterval: "Monthly",
      amount: 950,
      dueTime: "Due in 30 Days",
      date: "1 June, 2025",
      category: "Entertainment"
    },
    {
      title: "Electricity",
      timeInterval: "Monthly",
      amount: 500,
      dueTime: "Due in 25 Days",
      date: "5 June, 2025",
      category:"DiningOut"
    },
    {
      title: "Mobile Recharge",
      timeInterval: "Monthly",
      amount: 59.99,
      dueTime: "Due in 20 Days",
      date: "20 May, 2025",
      category:""
    },
  ]);
const [editReminder,setEditReminder] = useState(false)
const [name,setName] = useState("")
const [interval,setInt] = useState("")
const [val,setVal] = useState(0)
const [cat,setCat] = useState("")

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-12 pb-5">
        {reminders.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center p-8 bg-base-300 rounded-2xl">
            <p className="text-gray-500 mb-4">No reminders found</p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Create your first reminder
            </button>
          </div>
        ) : (
          reminders.map((val, ind) => {
            return (
              <div
                key={ind}
                className=" p-5 rounded-lg shadow-sm border border-gray-700 bg-base-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src="./notifications.svg"
                      alt="noti"
                      width={20}
                      height={20}
                    />
                    <h4 className="font-medium text-gray-300">{val.title}</h4>
                  </div>
                  <span className="text-xs bg-gray-800 text-[#449ff6] px-2 py-1 rounded-full">
                    {val.timeInterval}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  {`${val.dueTime}, (${val.date})`}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium font-mono">{`$${val.amount}`}</span>
                  <div className="flex space-x-2">
                    <button onClick={()=>{
                      setInt(val.timeInterval)
                      setName(val.title)
                      setVal(Number(val.amount))
                      setCat(val.category)
                      setEditReminder(!editReminder)
                      }} className="w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg">
                      <Image
                        src="./edit.svg"
                        alt="edit"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className="w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg">
                      <Image
                        src="./delete.svg"
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
      {editReminder && 
      (<EditReminder visible={()=>setEditReminder(!editReminder)} title={name} amount={val} int={interval} category={cat} />)}
    </div>
  );
};

export default Reminders;
