import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { User } from '@phosphor-icons/react';
import { useAuth } from '../../AuthContext';

export const NavBar = () => {
  const { user, logout } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate(); 

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

  const isAdmin = user && user.role === 'admin'; 
  const activeStyles = "text-green-400 hover:text-green-300 transition-all duration-300 ease-in-out";
  const inactiveStyles = "text-white hover:text-green-400 transition-all duration-300 ease-in-out";

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <nav className="p-4  relative">
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
          <li className="mt-4 md:mt-0">
                <NavLink
                  to="/residuos"
                  className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
                  onClick={toggleMenu}
                >
                  Residuos
                </NavLink>
              </li>
          {user && ( 
            <>
              
              {isAdmin && (
                <li className="mt-4 md:mt-0">
                  <NavLink
                    to="/users" 
                    className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
                    onClick={toggleMenu}
                  >
                    Gerir Contas
                  </NavLink>
                </li>
              )}
              {!isAdmin && (
                <li className="mt-4 md:mt-0">
                  <NavLink
                    to="/chats"
                    className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles}`}
                    onClick={toggleMenu}
                  >
                    Conversas
                  </NavLink>
                </li>
              )}
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
                  <User size={22} />
                </NavLink>
              </li>
              <li className="mt-4 md:mt-0 relative">
                <span 
                  className="bg-blue-600 text-white rounded-md px-3 py-1 font-semibold shadow-md cursor-pointer"
                  onClick={() => setShowLogoutPopup(!showLogoutPopup)} 
                >
                  {`Olá, ${user.name}`}
                </span>

                {showLogoutPopup && (
                  <div className="absolute md:right-0 w-36 text-xl 2xl:text-2xl  mt-8 md:w-48 bg-slate-200/90 rounded-md shadow-lg z-30">
                    <div className="px-4 py-2 text-center">
                      <p className="text-gray-800">Você deseja terminar a sessão?</p>
                      <div className="flex justify-between mt-2">
                        <button 
                          onClick={handleLogout} 
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Sim
                        </button>
                        <button 
                          onClick={() => setShowLogoutPopup(false)} 
                          className="text-red-600 hover:text-red-800"
                        >
                          Não
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </>
          )}

          {!user && (
            <>
              <li className="mt-4 md:mt-0">
                <NavLink
                  to="/login"
                  exact
                  className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles} sm:flex rounded-xl py-1 shadow-sm shadow-green-500 justify-center text-center relative sm:w-28`}
                  onClick={toggleMenu}
                >
                  Iniciar Sessão
                </NavLink>
              </li>
              <li className="mt-4 md:mt-0">
                <Link to="/" onClick={handleScrollToAbout} className={inactiveStyles}>
                  <button className={`${inactiveStyles} md:mt-0`}>
                    About
                  </button>
                </Link>
              </li>
            </>
          )}
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
