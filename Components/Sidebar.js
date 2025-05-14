import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  return (
    <ul className="bg-base-200 h-screen w-65 py-4 px-0 text-gray-300">
      <li className="pointer-events-none border-b  border-gray-400 p-[16px] pt-0 w">
        <h1 className="text-xl m-auto text-center font-bold">Budget Tracker</h1>
      </li>
      <li
        className={`mt-5 ${
          usePathname() === "/" ? "bg-gray-800" : "hover:bg-gray-700"
        } cursor-pointer`}
      >
        <Link href="/">
          <div className="flex items-center justify-start py-3.5 rounded-none pl-6">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[25px]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M55.64 22.751H35.09C34.5596 22.751 34.0509 22.9617 33.6758 23.3368C33.3007 23.7118 33.09 24.2205 33.09 24.751V55.571C33.0916 56.1009 33.3028 56.6087 33.6775 56.9834C34.0523 57.3582 34.5601 57.5694 35.09 57.571H55.64C56.1699 57.5694 56.6777 57.3582 57.0525 56.9834C57.4272 56.6087 57.6384 56.1009 57.64 55.571V24.751C57.64 24.2205 57.4293 23.7118 57.0542 23.3368C56.6791 22.9617 56.1704 22.751 55.64 22.751Z"
                  fill={usePathname() === "/" ? "#3e9bf7" : "#b0a99e"}
                />
                <path
                  d="M55.64 5.62695H35.09C34.5596 5.62695 34.0509 5.83767 33.6758 6.21274C33.3007 6.58781 33.09 7.09652 33.09 7.62695V17.8969C33.0916 18.4269 33.3028 18.9347 33.6775 19.3094C34.0523 19.6841 34.5601 19.8954 35.09 19.8969H55.64C56.1699 19.8954 56.6777 19.6841 57.0525 19.3094C57.4272 18.9347 57.6384 18.4269 57.64 17.8969V7.62695C57.64 7.09652 57.4293 6.58781 57.0542 6.21274C56.6791 5.83767 56.1704 5.62695 55.64 5.62695Z"
                  fill={usePathname() === "/" ? "#3e9bf7" : "#b0a99e"}
                />
                <path
                  d="M28.24 36.451H7.7C6.59543 36.451 5.7 37.3465 5.7 38.451V55.5711C5.7 56.6756 6.59543 57.5711 7.7 57.5711H28.24C29.3446 57.5711 30.24 56.6756 30.24 55.5711V38.451C30.24 37.3465 29.3446 36.451 28.24 36.451Z"
                  fill={usePathname() === "/" ? "#3e9bf7" : "#b0a99e"}
                />
                <path
                  d="M28.24 5.62697H7.70002C7.43712 5.62604 7.17661 5.67714 6.93355 5.77733C6.69048 5.87751 6.46964 6.02477 6.28373 6.21068C6.09783 6.39658 5.95054 6.61742 5.85035 6.86049C5.75017 7.10355 5.6991 7.36406 5.70002 7.62697V31.557C5.70002 32.0874 5.91074 32.5961 6.28581 32.9712C6.66088 33.3462 7.16959 33.557 7.70002 33.557H28.24C28.7704 33.557 29.2791 33.3462 29.6542 32.9712C30.0293 32.5961 30.24 32.0874 30.24 31.557V7.62697C30.2409 7.36406 30.1898 7.10355 30.0896 6.86049C29.9895 6.61742 29.8422 6.39658 29.6563 6.21068C29.4704 6.02477 29.2495 5.87751 29.0065 5.77733C28.7634 5.67714 28.5029 5.62604 28.24 5.62697Z"
                  fill={usePathname() === "/" ? "#3e9bf7" : "#b0a99e"}
                />
              </g>
            </svg>
            <p className="text-base font-medium ml-3">Dashboard</p>
          </div>
        </Link>
      </li>
      <li
        className={`cursor-pointer ${
          usePathname() === "/categories" ? "bg-gray-800" : "hover:bg-gray-700"
        }`}
      >
        <Link href="/categories">
          <div className="flex items-center justify-start py-3.5 rounded-none pl-6">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              version="1.1"
              fill="#000000"
              className="size-[25px]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <title>wallet_4_fill</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="Business"
                    transform="translate(-624.000000, -240.000000)"
                  >
                    <g
                      id="wallet_4_fill"
                      transform="translate(624.000000, 240.000000)"
                    >
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M19,4.98858 L19,5.99999 C20.1046,5.99999 21,6.89542 21,7.99999 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,7.99999 C3,6.95543 3.83483,6.00716 4.8132,5.72763 L15.8132,2.58477 C17.4102,2.12847 19,3.32763 19,4.98858 Z M15.5,11.5 C14.6716,11.5 14,12.1716 14,13 C14,13.8284 14.6716,14.5 15.5,14.5 C16.3284,14.5 17,13.8284 17,13 C17,12.1716 16.3284,11.5 15.5,11.5 Z M17,4.98858 C17,4.6840725 16.7327917,4.45717306 16.4422376,4.49176455 L16.3626,4.50782 L11.1401,5.99999 L17,5.99999 L17,4.98858 Z"
                        fill={
                          usePathname() === "/categories"
                            ? "#3e9bf7"
                            : "#b0a99e"
                        }
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-base font-medium ml-3">Budget Categories</p>
          </div>
        </Link>
      </li>
      <li
        className={`cursor-pointer ${
          usePathname() === "/expenses" ? "bg-gray-800" : "hover:bg-gray-700"
        }`}
      >
        <Link href="/expenses">
          <div className="flex  items-center justify-start py-3.5 rounded-none pl-6">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className="size-[25px]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21 6V3.50519C21 2.92196 20.3109 2.61251 19.875 2.99999C19.2334 3.57029 18.2666 3.57029 17.625 2.99999C16.9834 2.42969 16.0166 2.42969 15.375 2.99999C14.7334 3.57029 13.7666 3.57029 13.125 2.99999C12.4834 2.42969 11.5166 2.42969 10.875 2.99999C10.2334 3.57029 9.26659 3.57029 8.625 2.99999C7.98341 2.42969 7.01659 2.42969 6.375 2.99999C5.73341 3.57029 4.76659 3.57029 4.125 2.99999C3.68909 2.61251 3 2.92196 3 3.50519V14M21 10V20.495C21 21.0782 20.3109 21.3876 19.875 21.0002C19.2334 20.4299 18.2666 20.4299 17.625 21.0002C16.9834 21.5705 16.0166 21.5705 15.375 21.0002C14.7334 20.4299 13.7666 20.4299 13.125 21.0002C12.4834 21.5705 11.5166 21.5705 10.875 21.0002C10.2334 20.4299 9.26659 20.4299 8.625 21.0002C7.98341 21.5705 7.01659 21.5705 6.375 21.0002C5.73341 20.4299 4.76659 20.4299 4.125 21.0002C3.68909 21.3876 3 21.0782 3 20.495V18"
                  stroke={usePathname() === "/expenses" ? "#3e9bf7" : "#b0a99e"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7.5 15.5H11.5M16.5 15.5H14.5"
                  stroke={usePathname() === "/expenses" ? "#3e9bf7" : "#b0a99e"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16.5 12H12.5M7.5 12H9.5"
                  stroke={usePathname() === "/expenses" ? "#3e9bf7" : "#b0a99e"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7.5 8.5H16.5"
                  stroke={usePathname() === "/expenses" ? "#3e9bf7" : "#b0a99e"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <p className="text-base font-medium ml-3">Expenses</p>
          </div>
        </Link>
      </li>
      <li
        className={`cursor-pointer ${
          usePathname() === "/reminders" ? "bg-gray-800" : "hover:bg-gray-700"
        }`}
      >
        <Link href="/reminders">
          <div className="flex items-center justify-start py-3.5 rounded-none pl-6">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className="size-[25px]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                  stroke={
                    usePathname() === "/reminders" ? "#3e9bf7" : "#b0a99e"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <p className="text-base font-medium ml-3">Reminders</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
