import { MetaFunction } from "@remix-run/node"; // Asegúrate de importar desde @remix-run/node

export const meta: MetaFunction = () => {
    return [
      { title: "Catalogo | Reganvi" },
      { name: "description", content: "Bienvenido a la página principal de Reganvi." },
    ];
  };

export default function Catalogo() {
    return (
      <div>
        <h1>Catalogo de producto</h1>
        <p>Envíanos tus consultas y estaremos encantados de ayudarte.</p>
      </div>
    );
  }
  