import Dep from '../img/dep.jpg'
import ChatBot from '../img/chatbot.png';
export default function AboutMe() {
  return (
    <div className="self-center bg-blue-200 rounded-lg lg:bg-transparent lg:w-[80%] mx-auto">
      <div className="lg:flex lg:justify-center lg:items-center">
        <img src={ChatBot} alt="Chatbot" className="hidden w-14 lg:block lg:mx-2 lg:animate-bounce" />
        <h4 className="px-4 pt-4 text-xl font-semibold text-dark lg:p-0 lg:text-4xl">About Me</h4>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="p-8 lg:w-[1000px] lg:p-0 justify-center flex">
          <img src={Dep} alt="Profile" className="object-cover object-top mt-4 rounded-full aspect-square w-60 lg:w-full lg:mt-0" />
        </div>
        <div className="p-8 my-2">
          <p className="text-sm font-semibold text-justify text-dark">A passionate student majoring in Information Systems. Hailing from Indonesia, I find my true calling in the realm of frontend development. Armed with a fervor for crafting intuitive and visually appealing user interfaces, I embark on a journey to merge creativity with technology. Excited to contribute and collaborate in the vast world of coding. Let&apos;s build something awesome together!</p>
        </div>
      </div>
    </div>
  )
}