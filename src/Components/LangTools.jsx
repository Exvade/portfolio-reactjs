import { useState } from "react"
import Data from "../Data"
import stick from "../img/stick.png"
import SkillCard from "./SkillCard"
import Buttons from "./Buttons"
export default function LangTools() {
  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]
  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat )
    setItems(newItems)  
  }
  return (
    <div className="self-center mt-16">
      <div className="flex items-center px-4">
        <img src={stick} alt="" width="40" className="mr-1" />
        <h4 className="text-xl font-semibold text-dark">Language & Tools</h4>
      </div>
      <Buttons 
        menuItems = {menuItems}
        filterItems = {filterItems}
        setItems = {setItems}
      />
      <SkillCard item={item}/>
    </div>
  )
}