import Image from "next/image";
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const Setup = forwardRef((props, ref) => {
  const [category, setCategory] = useState([
    { category: "Personal", icon: "basket", budget: 0 },
    { category: "Utilities", icon: "bulb", budget: 0 },
    { category: "Transportation", icon: "car", budget: 0 },
    { category: "DiningOut", icon: "fork-knife", budget: 0 },
    { category: "Entertainment", icon: "play", budget: 0 },
    { category: "Shopping", icon: "bag", budget: 0 },
  ]);
  const [fail, setFail] = useState(false);
  function finalCheck() {
    let hasInvalid = false;
    catBud.forEach((val) => {
      const temp = parseInt(val);
      if (!temp || isNaN(temp)) {
        hasInvalid = true;
      }
    });
    if (hasInvalid) {
      setFail(true);
      return false;
    } else {
      setFail(false);
      return true;
    }
  }

  useImperativeHandle(ref, () => ({
    handleNext: finalCheck,
  }));
  const [catBud, setCatBud] = useState([0, 0, 0, 0, 0, 0]);
  const [total, setTotal] = useState(0);
  const [dis, setDis] = useState(false);
  useEffect(() => {
    setTotal(
      catBud.reduce(function (x, y) {
        return x + y;
      }, 0)
    );
  }, [catBud]);

  function deleteCat(i) {
    if (category.length > 2 && catBud.length > 2) {
      setCategory(
        category.filter((_, ind) => {
          return i !== ind;
        })
      );
      setCatBud(
        catBud.filter((_, ind) => {
          return i !== ind;
        })
      );
      setDis(false);
    }
    if (category.length <= 3) {
      setDis(true);
    }
  }
  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <h1 className="font-semibold tracking-tight text-2xl text-white">
          Set Your Budget
        </h1>
        <p className="text-sm text-gray-400">Configure your monthly budget</p>
      </div>

      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-sm space-y-3">
          <div className="space-y-1 text-left">
            <label className="text-sm font-medium text-gray-300">
              Total Monthly Budget ($)
            </label>
            <input
              type="number"
              min="0"
              step="10"
              disabled
              value={total ? total : 0}
              className="disabled:opacity-35 disabled:cursor-not-allowed w-full h-10 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-gray-500">
              Your Total budget is sum of all your Category Budget.
            </p>
          </div>
        </div>
      </div>
      {dis ? (
        <p className="text-sm px-8 text-red-600 py-1">
          You need atleast two Categories.
        </p>
      ) : (
        ""
      )}
      {fail ? (
        <p className="text-sm px-8 text-red-600 py-1">
          One or more Categories have a budget of Zero or a Invalid Number.
        </p>
      ) : (
        ""
      )}
      <div className="w-full px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-12">
        {category.map((val, ind) => (
          <div
            key={ind}
            className="p-5 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <Image
                    src={`./${val.icon}.svg`}
                    alt={`${val.category} icon`}
                    width={28}
                    height={28}
                  />
                  <h4 className="text-lg font-regular text-gray-200">
                    {val.category}
                  </h4>
                </div>
                <button
                  onClick={() => {
                    deleteCat(ind);
                  }}
                  disabled={dis}
                  className="disabled:opacity-35 disabled:cursor-not-allowed w-8 h-8 text-gray-400 hover:bg-black cursor-pointer flex justify-around items-center rounded-lg"
                >
                  <Image src="./delete.svg" alt="edit" width={20} height={20} />
                </button>
              </div>

              <input
                type="number"
                min="0"
                placeholder={`Enter ${val.category} Budget`}
                className="w-full rounded-md bg-gray-700 text-white px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setCatBud(
                    catBud.map((item, index) => {
                      if (index === ind) {
                        return parseInt(e.target.value);
                      } else {
                        return item;
                      }
                    })
                  );
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export default Setup;
