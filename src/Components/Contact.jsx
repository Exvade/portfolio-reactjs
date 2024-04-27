import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Contact(){
  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])
  return(
    <section className="pt-24 pb-24" id="contact">
    <div className="container">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-3xlxl" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            Contact Me
          </h2>
          <p className="text-base font-medium md:text-lg text-slate-500" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">Connect with Me and Share Your Thoughts. I&apos;m Here to Listen and Assist!</p>
        </div>
      </div>

      <form>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <label htmlFor="name" className="text-base font-bold text-primary">Name</label>
          <input type="text" id="name" className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          <div className="w-full px-4 mb-8" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
            <input type="text" id="email" className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          <div className="w-full px-4 mb-8" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <label htmlFor="message" className="text-base font-bold text-primary">Message</label>
            <textarea type="text" id="message" className="w-full h-32 p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
          </div>
          <div className="w-full px-4" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <button className="w-full px-8 py-3 text-base font-semibold text-white transition duration-500 rounded-lg bg-primary hover:opacity-80 hover:shadow-lg" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
  )
}