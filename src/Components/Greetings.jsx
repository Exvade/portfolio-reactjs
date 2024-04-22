import resume from '../file/Deft-Valian-Exanova.pdf'
import github from '../img/github.png'

export default function Greetings() {
  return (
    <div className="self-center w-full px-4 lg:w-1/2 animate__animated animate__fadeInLeft">
      <h1 className="text-base font-semibold text-primary md:text-xl">Hello Everyone 👋, I&apos;m <span className="block text-4xl font-bold text-dark lg:text-5xl">Deft Valian Exanova</span></h1>
      <h2 className="mb-5 text-lg font-medium text-slate-500 lg:text-2xl">Frontend Engineer</h2>
      <p className="mt-1 mb-10 font-medium leading-relaxed text-slate-400">Welcome to My Personal <span className="font-bold text-dark">Website</span></p>
      <a href={resume} download className="px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out rounded-xl bg-primary hover:shadow-lg hover:opacity-80">Download Resume</a>
      <div className='w-[115px] mt-7 rounded-xl '>
      <a href="https://github.com/Exvade" target='_blank' className="flex items-center w-full gap-2 px-4 py-2 text-sm font-semibold text-black transition duration-300 ease-in-out bg-white border-2 border-black rounded-xl hover:shadow-lg hover:opacity-80 hover:bg-black hover:text-white">
        <img src={github} alt="github png" className='inline w-6 aspect-square'/>
        <span className='flex items-center pt-[0.5px]'>Github</span> 
      </a>
      </div>
    </div>
  )
}