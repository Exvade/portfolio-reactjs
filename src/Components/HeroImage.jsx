import blueBG from '../assets/blue-bg.svg'
import Computer from '../img/computer.png'
export default function HeroImage() {
  return (
    <div className="self-center w-full px-4 lg:w-1/2 animate__animated animate__fadeInRight">
      <div className="relative mb-10 lg:mb-0 lg:right-0">
        <img src={Computer} alt="3D Computer" className="mx-auto md:max-w-lg lg:right-0" />
        <span className="absolute -translate-x-1/2 -top-10 -z-10 left-1/2 md:scale-125 lg:top-28 w-[350px] h-[350px]">
          <img src={blueBG} alt="blueBackground" className="lg:scale-150"/>
        </span>
      </div>
    </div>
  )
}