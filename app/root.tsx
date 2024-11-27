import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import TopBar from "./components/top-bar";
import BottomBar from "./components/bottom-bar";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
  },
  { rel: "stylesheet", href: "/styles/index-custom.css" }, // Asegúrate de que esté incluido aquí
  { rel: "stylesheet", href: "/styles/navigation.css" },
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
];

export function Layout({ /*children*/ }: { /*children: React.ReactNode*/ }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="mt-[68px] md:my-0 relative">
        <header>
          <TopBar />
        </header>
        <main className="w-full flex flex-col items-center justify-center">
          <Outlet /> {/* Renderiza el contenido de cada ruta aquí */}
        </main>
        <ScrollRestoration />
        <Scripts />
        {/* Footer */}
        <footer className="w-full font-raleway flex justify-center bg-[#191919] text-center text-white p-8 mb-16 md:mb-0">
          <div className="flex
            sm:w-min-[343px] sm:flex-col sm:items-center sm:text-[12px] sm:gap-8 
            md:items-start md:flex-row md:justify-between md:text-[16px]
            lg:w-[1224px]
          "> 
            <div className="flex flex-col items-center sm:gap-2 md:items-start">
            {/* Logo */}
              <div> 
                <img src="../images/logos/reganvi-logo.svg" alt="logo reganvi" className="py-2" />
              </div>
              <div className="w-full py-2 
                md:h-[51px]"
              >
                <p>© 2023 Reganvi Perú</p>
              </div>
            </div>
            <div className="flex flex-col
              sm:items-center sm:text-center sm:gap-4
              md:items-start md:text-left md:gap-6"
            >{/* Contacto */}
              <div className="w-full">
                <p className="
                  sm:font-semibold sm:text-[16px] 
                  md:font-medium md:text-[20px] md:text-start">Contacto</p>
              </div>
              <div>
                <p className="font-medium">Teléfono</p> 
                <p>+51 925 531 984</p>
                <p className="font-medium">Email</p>
                <p>reganvi.pe@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col
              sm:items-center sm:text-center sm:gap-4 
              md:items-start md:text-left md:gap-6">
            {/* Redes Sociales */}
              <div>
                <p className="
                  sm:font-semibold sm:text-[16px] 
                  md:font-medium md:text-[20px] md:text-start
                ">Siguenos</p>
              </div>
              <div className="h-full w-full flex flex-col items-start sm:gap-2 md:gap-3">
                <a href="https://www.facebook.com/reganvi015" target="_blank" rel="noopener noreferrer" className="w-full">
                  <div className="flex justify-between items-center gap-2">
                    <img src="../images/logos/f-logo.svg" alt="" />
                    <p>Facebook</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/reganvi.pe/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <div className="flex justify-between items-center gap-2">
                    <img src="../images/logos/i-logo.svg" alt="" />
                    <p>Instagram</p>
                  </div>
                </a>
                <a href="https://pe.linkedin.com/company/reganvi" target="_blank" rel="noopener noreferrer" className="w-full">
                  <div className="flex justify-between items-center gap-2">
                    <img src="../images/logos/l-logo.svg" alt="" />
                    <p className="w-full">LinkedIn</p>
                  </div> 
                </a>
              </div>
            </div>
            <div className="flex flex-col
              sm:items-center sm:text-center sm:gap-4 
              md:items-start md:text-left md:gap-6"
            >
            {/* Recursos */}
              <div>
                <p className="
                  sm:font-semibold sm:text-[16px] 
                  md:font-medium md:text-[20px] md:text-start
                ">Recursos</p>
              </div>
              <div className="">
                <p>Terminos y condiciones</p>
                <p>FAQ</p>
              </div>
            </div>
          </div>
        </footer>
        <div className="md:hidden">
          <BottomBar />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
