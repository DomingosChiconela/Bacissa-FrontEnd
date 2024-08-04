import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeStyles = "text-blue-600 hover:text-blue-400";
  const inactiveStyles = "text-white hover:text-blue-600";

  return (
    <nav className="p-4 md:pr-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <FaBars size={20} />
        </div>

        <ul
          className={`fixed top-0 right-0 text-2xl md:text-base w-80 h-full bg-gray-800 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:space-x-6 md:bg-transparent md:h-auto md:transform-none ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-20`}
        >
          <button
            className="absolute top-5 right-5 text-white md:hidden"
            onClick={toggleMenu}
          >
            <FaTimes size={25} />
          </button>
          <li className="mt-4 p-2 md:bg-transparent md:mt-0">
            <NavLink
              to="/"
              exact
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles} sm:flex relative sm:w-24`}
              onClick={toggleMenu}
            >
              Pagina Inicial
            </NavLink>
          </li>
          <li className="mt-4 md:mt-0">
            <NavLink
              to="/about"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="mt-4 md:mt-0">
            <NavLink
              to="/services"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="mt-4 md:mt-0">
            <NavLink
              to="/contact"
              className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
              onClick={toggleMenu}
            >
              Contact
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
