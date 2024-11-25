import { useState } from "react"
import logo from '@/assets/lgo.png';
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { Link } from "react-router-dom";

export const Header = () => {


  const [isOpen, setIsOpen] = useState(false)

  const toggelMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        <img src={logo} alt="logo" className="w-16 h-16" />

        {/* CENTER: LINKS (HIDDEN  ON MOBILE) */}
        <div className="hidden md:flex space-x-6">
          <Link to='/' className="hover:text-neutral-200">
            Inicio
          </Link>
          {/* <Link to='/nosotros' className="hover:text-neutral-200">
            Nosotros
          </Link> */}
          <Link to='/servicios' className="hover:text-neutral-200">
            Servicios
          </Link>
          <Link to='/blog' className="hover:text-neutral-200">
            Blog
          </Link>
          <Link to='/private/articulo' className="hover:text-neutral-200">
            Articulo
          </Link>
        </div>
        {/* RIGHT: BUTTTONS ON MOBILE */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to='/auth/login' className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
            Login
          </Link>
        </div>

         {/* HAMBURGER ICON FOR MOBILE */}
        <div className="md:hidden ">
          <button onClick={toggelMenu} className="text-white focus:outline-none"
          aria-label={isOpen ? "Close Menu":"Open Menu"}>
              {isOpen ? <RiCloseFill/> : <RiMenu3Line/>}
          </button>
        </div>


      </div>

      {/* Mobile menu  */}

      {
        isOpen && (
          <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
            <div className="flex flex-col space-y-4">
              <Link to='/' className="hover:text-neutral-200">
                Inicio
              </Link>
              {/* <Link to='/nosotros' className="hover:text-neutral-200">
                Nosotros
              </Link> */}
              <Link to='/servicios' className="hover:text-neutral-200">
               Servicios
              </Link>
              <Link to='/blog' className="hover:text-neutral-200">
               Blog
              </Link>
              <Link to='/auth/login' className="border border-neutral-700 text-center text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
            Login
          </Link>
            </div>
          </div>
        ) 
      }
    </nav>

  )
}
