/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Data from "../Data";

export default function Buttons({ menuItems, filterItems, setItems }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (val) => {
    setActiveButton(val);
    filterItems(val);
  };

  return (
    <div className="flex px-4 mt-2">
      <button
        className={`p-1 px-2 text-[12px] md:text-[14px] mx-1 font-medium rounded-sm border-primary text-primary border-[1px] ${
          activeButton === null ? "bg-primary text-white" : "transition-colors duration-500 hover:bg-primary hover:text-white"
        }`}
        onClick={() => {
          setActiveButton(null);
          setItems(Data);
        }}
      >
        All
      </button>
      {menuItems.map((val) => (
        <button
          key={val}
          className={`p-1 px-2 text-[12px] md:text-[14px] mx-1 font-medium rounded-sm border-primary text-primary border-[1px] ${
            activeButton === val ? "bg-primary text-white" : "transition-colors duration-500 hover:bg-primary hover:text-white"
          }`}
          onClick={() => handleClick(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
