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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body >
        <header>
          <TopBar />
        </header>
        <main className="w-full flex flex-col items-center justify-center">
          <Outlet /> {/* Renderiza el contenido de cada ruta aquí */}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
      {/* Footer */}
      <footer className="w-full flex justify-center bg-[#191919] text-center text-white p-8">
        <div className="w-[1224px] flex justify-between"> 
          <div className="flex flex-col gap-6"> {/* Logo */}
            <div> 
              <img src="public/images/logos/reganvi-logo.svg" alt="" />
            </div>
            <div className="h-[72px] mini-text gap-1">
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight">Reganvi</p>
              <p>© 2023 Reganvi Perú</p>
            </div>
          </div>
          <div className="flex flex-col items-start text-left gap-6"> {/* Contacto */}
            <div>
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight gap-1">Contacto</p>
            </div>
            <div className="h-full mini-text">
              <p>Teléfono: +51 925 531 984</p>
              <p>Email: reganvi.pe@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-6"> {/* Redes Sociales */}
            <div>
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight">Siguenos</p>
            </div>
            <div className="h-full flex flex-col items-start mini-text gap-1">
              <a href="https://www.facebook.com/reganvi015" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-between">
                  <img src="../images/logos/f-logo.svg" alt="" />
                  <p>Facebook</p>
                </div>
              </a>
              <a href="https://www.instagram.com/reganvi.pe/" target="_blank" rel="noopener noreferrer">
                <div>
                  <img src="../images/logos/i-logo.svg" alt="" />
                  <p>Instagram</p>
                </div>
              </a>
              <a href="https://pe.linkedin.com/company/reganvi" target="_blank" rel="noopener noreferrer">
                <div>
                  <img src="../images/logos/l-logo.svg" alt="" />
                  <p>LinkedIn</p>
                </div> 
              </a>
            </div>
          </div>
          <div className="flex flex-col text-start gap-6"> {/* Recursos */}
            <div>
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight gap-1">Recursos</p>
            </div>
            <div className="h-full mini-text">
              <p>Terminos y condiciones</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
