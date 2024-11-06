// app/components/TopBar.tsx

import { Link } from "@remix-run/react";

export default function TopBar() {
  return (
    <header className="bg-white text-black w-full py-4">
      <div className="w-full max-w-[1244px] lg:max-w-[1244px] sm:max-w-[343px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="Reganvi Logo" className="h-8 inline-block mr-2" />
          Reganvi
        </Link>
        
        {/* Navegación */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">INICIO</Link></li>
            <li><Link to="/catalogo" className="hover:text-gray-300">CATOLOGO</Link></li>
            <li><Link to="/nosotros" className="hover:text-gray-300">NOSOTROS</Link></li>
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
