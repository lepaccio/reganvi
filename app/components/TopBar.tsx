// app/components/TopBar.tsx

import { Link } from "@remix-run/react";
import { NavLink } from "@remix-run/react";
import { NavItemText } from "./TextComponents";
import "public/styles/navigation.css"; // Importa los estilos de navegación

export default function TopBar() {
  return (
    <header className="bg-white text-black w-full py-2">
      <div className="w-full max-w-[1244px] lg:max-w-[1244px] sm:max-w-[343px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="my-2">
          <img src="public/images/logos/logo-page.svg" alt="Reganvi Logo" className="logo-size inline-block mr-2" />
        </Link>
        
        {/* Navegación */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/"
                className={({ isActive}: {isActive: boolean}) => 
                  isActive
                    ? "nav-link text-[#155C22]"  //Activo
                    : "nav-link text-black"
                }
              >
                <NavItemText>
                  INICIO
                </NavItemText>  
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/catalogo"
                className={({ isActive}: {isActive: boolean}) => 
                  isActive
                    ? "nav-link text-[#155C22]" //Activo
                    : "nav-link text-black"
                }
              >
                <NavItemText>
                  CATOLOGO
                </NavItemText> 
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/nosotros"
                className={({ isActive}: {isActive: boolean}) => 
                  isActive
                    ? "nav-link text-[#155C22]" //Activo
                    : "nav-link text-black"
                }
              >
                <NavItemText>
                  NOSOTROS
                </NavItemText> 
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Menú hamburguesa */}
        <button className="sm:hidden">
          <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

      </div>
    </header>
  );
}
