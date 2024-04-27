import ProjData from '../ProjData'
import building from '../img/projects.png'
import Project from './Project'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Works(){
  const item = ProjData
  useEffect(()=> {
    Aos.init({duration: 500})
  }, [])
  return (
    <section id="project" className="pt-16 pb-24">
      <div className="container">
        <div className="self-center">
          <div className="flex items-center px-4" data-aos="fade-right">
            <img src={building} alt="" className='w-[40px] pl-2 mr-1'/>
            <h4 className="text-xl font-semibold text-dark" >Projects</h4>
          </div>
          <Project item={item}/>
        </div>
      </div>
    </section>
  )
}