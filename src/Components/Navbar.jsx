
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4 animate__animated animate__fadeInLeft">
            <a href="#home" className="block py-6 font-extrabold text-primary">Exvade.</a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className="absolute block right-1 lg:hidden">
              <span className="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
              <span className="transition duration-300 ease-in-out hamburger-line"></span>
              <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none animate__animated animate__fadeInRight">
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="flex py-2 mx-8 text-base text-dark group-hover:text-primary font-medium">Home</a>
                </li>
                <li className="group">
                  <a href="#about" className="flex py-2 mx-8 text-base text-dark group-hover:text-primary font-medium">About Me</a>
                </li>
                <li className="group">
                  <a href="#projects" className="flex py-2 mx-8 text-base text-dark group-hover:text-primary font-medium">Projects</a>
                </li>
                <li className="group">
                  <a href="#contact" className="flex py-2 mx-8 text-base text-dark group-hover:text-primary font-medium">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
