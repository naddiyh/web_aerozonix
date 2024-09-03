"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useForm } from "react-hook-form";

export const Daily = () => {
  const { register, watch, setValue } = useForm();
  const [dropDown, setDropDown] = useState(false);
  const [dataStatus, setDataStatus] = useState({
    "24 Hours": true,
    Daily: false,
    Month: false,
    Year: true,
  });

  const selectedOption = watch("timeframe", "Daily");

  const toogleDropdown = () => {
    setDropDown(!dropDown);
  };

  const selectOption = (option: string) => {
    setValue("timeframe", option);
    setDropDown(false);
  };

  return (
    <div className="relative z-10 flex">
      <button
        type="button"
        onClick={toogleDropdown}
        className="flex items-center gap-2 rounded-md bg-white px-3 py-1 text-text-s"
      >
        {selectedOption}
        <FaChevronDown className="h-2 w-2" />
      </button>

      {dropDown && (
        <div className="absolute left-0 top-9 w-[100px] rounded-md bg-white shadow-lg ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {["24 Hours", "Daily", "Month", "Year"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => selectOption(option)}
                className="block w-full px-4 py-2 text-left text-text-s text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
