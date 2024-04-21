/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Data from "../Data"

export default function Buttons({ menuItems, filterItems, setItems }) {
  return (
    <div className="flex px-4 mt-2">
      <button className="p-1 px-2 mx-2 text-[14px] font-medium text-white rounded-sm bg-primary" onClick={() => setItems(Data)}>
        All
      </button>
      {
        menuItems.map(val => (
          <button className="p-1 px-2 text-[14px] mx-2 font-medium text-white rounded-sm bg-primary"
          onClick={() => filterItems(val)}>
            {val}
          </button>
        ))
      }
    </div>
  )
}