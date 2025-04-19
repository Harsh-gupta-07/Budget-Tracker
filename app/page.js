import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm lg:hidden">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>{" "}
            </svg>
          </button>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-65 py-4 px-0 text-gray-300">
            {/* Sidebar content here */}
            <li className="pointer-events-none border-b  border-gray-400 p-[16px] pt-0 w">
              <h1 className="text-xl m-auto text-center font-bold">Budget Tracker</h1>
            </li>
            <li className="mt-5">
              <div className="flex items-center justify-start py-3 rounded-none pl-6">
                <Image  src="/block_15713564.png" width={25} height={25} alt="dashboard-logo"/>
                <p className="text-base font-medium ml-1`````````">Dashboard</p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start py-3 rounded-none pl-6">
                <Image  src="/wallet-4-svgrepo-com (2).svg" width={25} height={25} alt="dashboard-logo"/>
                <p className="text-base font-medium ml-1">Budget Categories</p>
              </div>
            </li>
            <li>
              <div className="flex  items-center justify-start py-3 rounded-none pl-6">
                <Image  src="/bill-svgrepo-com (1).svg" width={25} height={25} alt="dashboard-logo"/>
                <p className="text-base font-medium ml-1">Expenses</p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start py-3 rounded-none pl-6">
                <Image  src="/bell-svgrepo-com.svg" width={25} height={25} alt="dashboard-logo"/>
                <p className="text-base font-medium ml-1">Reminders</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
