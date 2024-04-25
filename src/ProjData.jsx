import html from './img/html.jpg'
import css from './img/css.png'
import js from './img/javascript.png'
import tailwind from './img/tailwind.jpg'
import react from './img/react.png'
import flowbite from './img/flowbite.png'
import Attendance from './img/project-img/absen.png'
import Porfolio from './img/project-img/portfolio.png'
import CareerSync from './img/project-img/career-sync.png'
import BuenozPizza from './img/project-img/buenos.png'

const ProjData = [
  {
    id: "1",
    link: "https://attendance-website.netlify.app/",
    img: Attendance,
    title: "Attendance Website",
    titleColor: "#ef4444",
    category: "Landing Page",
    tech1: html,
    tech2: css,
    tech3: js,
  },
  {
    id: "2",
    link: "#",
    img: Porfolio,
    title: "Portfolio Website",
    titleColor: "#3b82f6",
    category: "Landing Page",
    tech1: html,
    tech2: tailwind,
    tech3: js,
  },
  {
    id: "3",
    link: "https://careersync.netlify.app/",
    img: CareerSync,
    title: "Career Sync",
    titleColor: "#2C0A55",
    category: "CRUD Website",
    tech1: react,
    tech2: tailwind,
    tech3: flowbite,
  },
  {
    id: "4",
    link: "https://buenos-pizza.netlify.app/",
    img: BuenozPizza,
    title: "Buenoz Pizza",
    titleColor: "#AB3D2B",
    category: "E-Commerce Website",
    tech1: html,
    tech2: tailwind,
    tech3: js,
  },
]

export default ProjData