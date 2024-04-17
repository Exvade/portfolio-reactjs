import { useState } from 'react';
import 'animate.css';

function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex items-center w-full overflow-hidden bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4 animate__animated animate__fadeInLeft">
            <a href="#home" className="block py-6 font-bold text-primary">Exvade.</a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`animate__animated animate__fadeInRight absolute block right-4 lg:hidden ${isNavMenuOpen ? 'hamburger-active' : ''}`}
              onClick={toggleNavMenu}
            >
              <span className="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
              <span className="transition duration-300 ease-in-out hamburger-line"></span>
              <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>

            <nav
              id="nav-menu"
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none animate__animated animate__fadeInRight ${isNavMenuOpen ? '' : 'hidden'}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="flex py-2 mx-8 text-base font-medium text-dark group-hover:text-primary">Home</a>
                </li>
                <li className="group">
                  <a href="#about" className="flex py-2 mx-8 text-base font-medium text-dark group-hover:text-primary">About Me</a>
                </li>
                <li className="group">
                  <a href="#projects" className="flex py-2 mx-8 text-base font-medium text-dark group-hover:text-primary">Projects</a>
                </li>
                <li className="group">
                  <a href="#contact" className="flex py-2 mx-8 text-base font-medium text-dark group-hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
