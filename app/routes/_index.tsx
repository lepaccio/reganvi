// app/routes/index.tsx
import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Reganvi" },
    { name: "description", content: "Bienvenido a la página principal de Reganvi." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#DEDEDE] flex flex-col items-center justify-center">
      <header className="TopBar text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800">Bienvenido a Reganvi</h1>
        <p className="text-lg mt-4 text-gray-600">Tu plataforma para [descripción breve de tu propósito].</p>
      </header>
      <section className="my-8 text-center">
        <p className="mb-6 text-gray-700">Descubre cómo Reganvi puede ayudarte a alcanzar tus metas.</p>
        <Link to="/explora" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Explora más
        </Link>
      </section>
      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; 2024 Reganvi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
