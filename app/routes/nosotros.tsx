import { MetaFunction } from "@remix-run/node"; // Asegúrate de importar desde @remix-run/node
import { TitleSection } from "~/components/text-components";
import { CardUs } from "~/components/cards-components";
export const meta: MetaFunction = () => {
    return [
      { title: "Nosotros | Reganvi" },
      { name: "description", content: "Quienes somos" },
      { name: "keywords", content: "Reganvi, quienes somos, startup, inicios, equipo, crecimiento, alianzas, lider, reciclaje"},
      { name: "category", content: "Reciclaje, startup" },
    ];
  };

export default function Nosotros() {
    return (
      <>
        <section className="w-full bg-[#DEDEDE] flex justify-center">
          <div className="w-[342px] md:w-[1224px] flex flex-col items-center gap-4 md:gap-16 pt-24 pb-16">
            <TitleSection>¿Quiénes somos?</TitleSection>
            <hr className="w-full border-[1px] border-black rounded-full opacity-10"/>
            <CardUs
              title="Inicios de Reganvi"
              description="Reganvi es una startup peruana líder en el reciclaje, que busca transformar la industria mediante la innovación tecnológica. Fundada en agosto de 2023, nació en la Ideathon organizada por Empecemos Entendiendo, como una propuesta innovadora para facilitar la compra y venta de materiales reciclables en el Perú, enfocándose inicialmente en el sector empresarial de gran escala. La experiencia de más de 10 años de nuestro cofundador Víctor Palma en el sector de reciclaje ha sido clave para destacar y ganar premios en esta iniciativa."
              imagepath="../images/general/us/inicios.webp"
            />
            <hr className="w-full border-[1px] border-black rounded-full opacity-10"/>
            <CardUs
              title="El equipo se fortalece"
              description="Un mes después de nuestra fundación, nos unimos al programa de preincubación de UTEC Ventures, donde mejoramos nuestra propuesta, fortalecimos nuestras operaciones y descubrimos nuevos desafíos, como la falta de conexión constante entre industrias. Actualmente, nuestro equipo fundador está compuesto por Víctor Palma, Marithza Huete y Rodrigo Mandujano. Posteriormente, se unieron Carlos Feijoo, Jeffrey Monja, Guadalupe Jara, Johan Ribba y Enrique Flores, formando un equipo sólido y multidisciplinario."
              imagepath="../images/general/us/equipo-1.webp"
              reverseOrder={true}
            />            
            <hr className="w-full border-[1px] border-black rounded-full opacity-10"/>
            <CardUs
              title="Crecimiento y alianzas estratégicas"
              description="El aprendizaje continuo en programas de incubación y aceleración ha permitido a Reganvi optimizar sus habilidades en negociación y ventas, logrando independencia financiera sin inversión externa. Hemos establecido alianzas con empresas de renombre como Sinba, Pamolsa y Tetrapak, quienes han confiado en nuestro enfoque diferencial, caracterizado por la rapidez, seguridad y precios competitivos."
              imagepath="../images/general/us/alianzas-1.webp"
              style={
                {
                  "--custom-img-height":"auto",
                }
              }
            />            
            <hr className="w-full border-[1px] border-black rounded-full opacity-10"/>
            <CardUs
              title="Líder en Reciclaje"
              description="Hoy, Reganvi se posiciona como una opción destacada en el sector del reciclaje en Perú. A través de nuestra plataforma, ayudamos a reducir costos, conectar empresas con recicladores y optimizar la compra y venta de materiales reciclables. Esta solución no solo beneficia a grandes compañías, sino que también apoya a recicladores pequeños, creando mayores oportunidades en el mercado. Al transformar el reciclaje en un proceso eficiente y sostenible, Reganvi contribuye tanto a la economía como al cuidado del medio ambiente."
              imagepath="../images/general/us/lider-4.webp"
              reverseOrder={true}
              imageOffset="0"
              style={{
                "--custom-img-width": "110%",
                "--custom-img-height":"110%",
              }}
            />
            <hr className="w-full border-[1px] border-black rounded-full opacity-10"/>
            <CardUs
              title="Presencia Internacional"
              description='Gracias a nuestro compromiso con la sostenibilidad, hemos sido reconocidos a nivel internacional, destacando en el programa de preincubación Santander Explorer 2023-2, donde quedamos entre los mejores proyectos a nivel mundial. Además, fuimos la segunda mejor startup internacional en el programa de aceleración polaco Unsung Heroes. Estas experiencias han fortalecido nuestra reputación como una startup ambiental y social, impulsada por nuestro reciente reconocimiento en el Desafío Kunan, en la categoría de "Jóvenes por el Cambio Climático".'
              imagepath="../images/general/us/internacional.webp"
            />
            <hr className="w-full border-[1px] border-black rounded-full opacity-10"/>
            <CardUs
              title="Proximos Pasos"
              description="Reganvi se encuentra en una fase de expansión. Nos preparamos para acceder a fondos de inversión de mayor escala, con el objetivo de incrementar nuestro impacto y consolidar la economía circular como una oportunidad tangible en el mercado. Buscamos contribuir significativamente al sector de reciclaje en América Latina, generando impacto positivo y sostenible en el medio ambiente y las comunidades."
              imagepath="../images/general/us/proximos.webp"
              reverseOrder={true}
            />
          </div>
        </section>
      </>
    );
  }
  