/* eslint-disable react/prop-types */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Project({item}){
  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])
  return(
    <div className="grid grid-cols-1 gap-2 px-6 mt-6 lg:grid-cols-2 lg:gap-5">
      {item.map((val) => (
        <a href={val.link} target="_blank" className="mb-5 overflow-hidden transition-all duration-300 bg-white rounded-md shadow-lg sm:mb-0 group" key={val.id} data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <img src={val.img} alt="Image caption" className="object-cover object-top w-full aspect-video" />
        <div className="flex flex-col px-4 py-4">
          <h2 className="font-semibold" style={{ color: val.titleColor }}>{val.title}</h2>
          <div className="flex justify-between w-full">
            <p className="mt-2 text-sm font-medium transition-all duration-300 lg:text-base">{val.category}</p>
            <div className="flex items-center justify-between w-24">
              <img src={val.tech1} alt="" width="22" className="aspect-square" />
              <img src={val.tech2} alt="" width="22" className="" />
              <img src={val.tech3} alt="" width="21" className="aspect-square" />
            </div>
          </div>
        </div>
      </a>
      ))}
    </div>
  )
}