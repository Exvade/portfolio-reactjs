import Dep from '../img/dep.jpg'
import ChatBot from '../img/chatbot.png';
export default function Me() {
  return (
    <div className="self-center bg-blue-200 rounded-lg lg:bg-transparent lg:w-[80%] mx-auto">
      <div className="lg:flex lg:justify-center lg:items-center">
        <img src={ChatBot} alt="Chatbot" className="hidden w-14 lg:block lg:mx-2 lg:animate-bounce" />
        <h4 className="px-4 pt-4 text-xl font-semibold text-dark lg:p-0 lg:text-4xl">About Me</h4>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-center p-8 lg:w-[1000px] lg:p-0">
          <img src={Dep} alt="Profile" className="object-cover object-top mt-4 rounded-full lg:rounded-md aspect-square w-60 lg:w-full lg:mt-0" />
        </div>
        <div className="p-8 my-2">
          <p className="text-sm font-semibold text-justify text-dark">A dedicated and motivated Information Systems student in the field of Technology with a strong academic background and practical experience. Have experience learning <span className='text-[#1fc5db]'>Tailwind</span>,  <span className='text-[#6f42c1]'>Bootstrap</span>, <span className='text-[#04d8f9]'>ReactJS</span>, <span className='text-[#42b883]'>VueJS</span>, <span className='text-[#fb6c04]'>UI</span>/<span className='text-[#2464f3]'>UX</span>. Able to do web design slicing according to the given design, especially design through <span className='text-[#f14e32]'>Figma</span>. Committed to continuous learning and development as well as delivering excellence and exceeding expectations. I am ready to contribute in a dynamic team with a focus on achievements and goals.</p>
        </div>
      </div>
    </div>
  )
}