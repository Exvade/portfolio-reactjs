import { useState } from "react"
import Data from "../Data"
import stick from "../img/stick.png"
import SkillCard from "./SkillCard"
import Buttons from "./Buttons"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function LangTools() {
  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]
  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat )
    setItems(newItems)  
  }
  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className="self-center mt-16">
      <div className="flex items-center px-4" data-aos="fade-right">
        <img src={stick} alt="" width="40" className="mr-1" />
        <h4 className="text-xl font-semibold text-dark">Language & Tools</h4>
      </div>
      <Buttons
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" 
        menuItems = {menuItems}
        filterItems = {filterItems}
        setItems = {setItems}
      />
      <SkillCard item={item}/>
    </div>
  )
}