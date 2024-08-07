import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { User } from '@phosphor-icons/react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section'); 
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };
  const adMin = false
  const loggedIn = true
  const activeStyles = "text-blue-600 hover:text-blue-400 transition-all duration-300 ease-in-out";
  const inactiveStyles = "text-white hover:text-blue-600 transition-all duration-300 ease-in-out";

  return (
    <nav className=" p-2 md:pr-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <FaBars size={20} />
        </div>

        <ul
          className={`fixed top-0 right-0 text-2xl md:text-base w-80 md:w-full h-full bg-gray-800 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:space-x-6 md:bg-transparent md:h-auto md:transform-none ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-20`}
        >
          <button
            className="absolute top-5 right-5 text-white md:hidden"
            onClick={toggleMenu}
          >
            <FaTimes size={25} />
          </button>

        {loggedIn &&  <li className="mt-4 md:mt-0">
            <NavLink
              to="/residuos"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
             Residuos
            </NavLink>
          </li>}
        {adMin &&  <li className="mt-4 md:mt-0">
            <NavLink
              to="/residuos"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
             gerir contas
            </NavLink>
          </li>}
         
         
         
         <li className="mt-4 md:mt-0">
            <NavLink
              to="/chats"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
              Conversas
            </NavLink>
            
          </li>
          <li className="mt-4 md:mt-0">

            <Link to="/"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}>
            
            
            <button

              onClick={handleScrollToAbout}
              className={`${inactiveStyles} md:mt-0`}

              

            >
              About
            </button>
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            <NavLink
              to="/dashpage"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
             Dashboard
            </NavLink>
          </li>
          <li className="mt-4 md:mt-0">
            <NavLink
              to="/profile"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
              <User size={22}/>
            </NavLink>
          </li>
          <li className="mt-4  md:bg-transparent md:mt-0">
            <NavLink
              to="/login"
              exact
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles} sm:flex rounded-xl py-1 shadow-sm shadow-blue-500/50 justify-center text-center relative  sm:w-28`}
              onClick={toggleMenu}
            >
              Iniciar Sessão
            </NavLink>
          </li>
        </ul>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};
