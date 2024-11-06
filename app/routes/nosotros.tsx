import { MetaFunction } from "@remix-run/node"; // Asegúrate de importar desde @remix-run/node

export const meta: MetaFunction = () => {
    return [
      { title: "Nosotros | Reganvi" },
      { name: "description", content: "Bienvenido a la página principal de Reganvi." },
    ];
  };

export default function Nosotros() {
    return (
      <div>
        <h1>Acerca de Nosotros</h1>
        <p>Conoce más sobre el propósito de Reganvi.</p>
      </div>
    );
  }
  