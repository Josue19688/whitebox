import { useState } from 'react';
import { RiMenu3Line,  RiPresentationFill,  RiArrowDownWideFill, RiDraftFill, RiBarChart2Fill, RiLogoutBoxFill } from '@remixicon/react';
import { Link } from 'react-router-dom';
import { userAuthStore } from '@/stores/auth/auth.store';



export const Sidenav = () => {
  const logoutUser = userAuthStore(state=>state.logoutUser);
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Función para manejar la apertura/cierre del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Botón para abrir el menú en móvil */}
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 md:hidden">
        <RiMenu3Line className="text-2xl" />
      </button>

      <div
        className={`fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform ${
          isOpen ? 'transform-none' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center pb-4 border-b border-b-gray-800">
          <h2 className="font-bold text-2xl">
            Josué<span className="bg-[#f84525] text-white px-2 rounded-md">Vásquez</span>
          </h2>
        </div>

        <ul className="mt-4">
          <span className="text-gray-400 font-bold">ADMIN</span>
          <li className="mb-1 group">
            <Link to={'/private/dashboard'} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md">
              <RiBarChart2Fill className="mr-3 text-lg" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <p
                            onClick={() => toggleDropdown('users')}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            >
              <RiDraftFill className="mr-3 text-sm" />
              <span className="text-sm">Articulos</span>
              <RiArrowDownWideFill 
               className={`ri-arrow-drop-down-line ml-auto transform transition-transform ${
                activeDropdown === 'users' ? 'rotate-90' : ''
              }`}
              ></RiArrowDownWideFill>
            </p>
            <ul className={`pl-7 mt-2 ${activeDropdown === 'users' ? 'block' : 'hidden'}`}>
              <li className="mb-4">
                <Link to={'/private/articulosAll'} className="text-gray-900 text-sm flex items-center hover:text-[#f84525]">
                  All
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'/private/createArticulo'} className="text-gray-900 text-sm flex items-center hover:text-[#f84525]">
                  create
                </Link>
              </li>
            </ul>
          </li>

          <li className="mb-1 group">
            <p
             
              onClick={() => toggleDropdown('cursos')}
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            >
              <RiPresentationFill className="mr-3 text-sm" />
              <span className="text-sm">Cursos</span>
              <RiArrowDownWideFill 
               className={`ri-arrow-drop-down-line ml-auto transform transition-transform ${
                activeDropdown === 'cursos' ? 'rotate-90' : ''
              }`}
              />
            </p>
            <ul className={`pl-7 mt-2 ${activeDropdown === 'cursos' ? 'block' : 'hidden'}`}>
              <li className="mb-4">
                <Link to={'/private/cursosAll'} className="text-gray-900 text-sm flex items-center hover:text-[#f84525]">
                  All
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'/private/createCursos'} className="text-gray-900 text-sm flex items-center hover:text-[#f84525]">
                  create
                </Link>
              </li>
            </ul>
          </li>

          <span className="text-gray-400 font-bold">System</span>
          <li className="mb-1 group">
            <a onClick={logoutUser} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md">
              <RiLogoutBoxFill className="mr-3 text-lg" />
              <span className="text-sm">Salir</span>
              
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay para cerrar el menú en móvil */}
      {isOpen && <div onClick={toggleMenu} className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden"></div>}
    </>
  );
};
