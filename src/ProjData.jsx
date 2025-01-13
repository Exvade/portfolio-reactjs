import css from './img/css.png'
import flowbite from './img/flowbite.png'
import html from './img/html.jpg'
import js from './img/javascript.png'
import Attendance from './img/project-img/absen.png'
import AgencyFolio from './img/project-img/agencyfolio.png'
import BuenozPizza from './img/project-img/buenos.png'
import ShopSphere from './img/project-img/shopsphere.png'
import react from './img/react.png'
import tailwind from './img/tailwind.jpg'

const ProjData = [
  {
    id: "1",
    link: "https://attendance-website.netlify.app/",
    img: Attendance,
    category: "Website",
    title: "Attendance Website",
    titleColor: "#ef4444",
    type: "Landing Page",
    tech1: html,
    tech2: css,
    tech3: js,
  },
  {
    id: "2",
    link: "https://buenos-pizza.netlify.app/",
    img: BuenozPizza,
    category: "Website",
    title: "Buenoz Pizza",
    titleColor: "#AB3D2B",
    type: "E-Commerce Website",
    tech1: html,
    tech2: tailwind,
    tech3: js,
  },
  {
    id: "5",
    link: "https://exv-shopsphere.vercel.app/",
    img: ShopSphere,
    category: "Website",
    title: "ShopSphere",
    titleColor: "#f84559",
    type: "E-Commerce Website",
    tech1: react,
    tech2: tailwind,
    tech3: flowbite,
  },
  {
    id: "6",
    link: "https://agencyfolio.netlify.app/",
    img: AgencyFolio,
    category: "Website",
    title: "Portfolio Website",
    titleColor: "#7353dc",
    type: "Landing Page",
    tech1: react,
    tech2: tailwind,
    tech3: flowbite,
  },


]

export default ProjData

