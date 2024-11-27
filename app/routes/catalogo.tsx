import { MetaFunction } from "@remix-run/node"; // Asegúrate de importar desde @remix-run/node
import { TitleSection } from "~/components/text-components";
import { CardCatalog } from "~/components/cards-components";
export const meta: MetaFunction = () => {
    return [
      { title: "Catalogo | Reganvi" },
      { name: "catalogo", content: "Catalogo de materiales reciclados de Reganvi." },
      { name: "keywords", content: "reciclaje,catalogo de materiales reciclados, catalogo, precio, estimado, precios estimandos, materiales reciclados, Reganvi, vidrio, plastico, papel, carton, metal, acero, aluminio" },
      { name: "category", content: "Reciclaje" },
    ];
  };

export default function Catalogo() {
    return (
      <>
        <section 
          className="w-full bg-[#81C244] flex justify-center" 
          style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 50%)'
        }}> {/* Sección de título */}
          <div 
            className="px-1 my-8 flex flex-col gap-2 font-montserrat 
              w-[342px] text-[48px] leading-[56px] text-white
              md:w-[1224px] md:text-[72px] md:leading-[80px]
          ">
            <h1 className="font-bold">Precios <span className="text-[#155C22]">Estimados</span></h1>
            <p className="font-raleway
              text-[16px] leading-[22px] 
              md:text-[22px] md:leading-[26px]"
            >
              ¿Que nuevo material deseas comprar hoy?
            </p>
          </div>
        </section>
        <section className="w-full bg-[#DEDEDE] flex justify-center pt-8 pb-11 gap-4"> {/* Sección de catálogo */}
          <div className="flex flex-col gap-6
            w-[342px]
            md:w-[1224px] 
          ">
            <TitleSection className="px-2">Mira nuestro catalogo</TitleSection>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
              <CardCatalog
                imagepath="../images/general/catalog/papeles.jpeg"
                title="PAPEL"
                description="Stock > 96 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20papel"
              />
              <CardCatalog
                imagepath="../images/general/catalog/aluminio.jpg"
                title="ALUMINIO"
                description="Stock > 85 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20aluinio"
              />
              <CardCatalog
                imagepath="../images/general/catalog/vidrio.jpeg"
                title="VIDRIO"
                description="Stock > 45 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20vidrio"
              />
              <CardCatalog
                imagepath="../images/general/catalog/carton.jpg"
                title="CARTON"
                description="Stock > 76 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20carton"
              />
              <CardCatalog
                imagepath="../images/general/catalog/plasticoduro.jpg"
                title="PLÁSTICO DURO"
                description="Stock > 50 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20plastico%20duro"
              />
              <CardCatalog
                imagepath="../images/general/catalog/plasticos.jpg"
                title="PLÁSTICO"
                description="Stock > 66 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20plastico"
              />
              <CardCatalog
                imagepath="../images/general/catalog/metales.jpeg"
                title="METAL"
                description="Stock > 80 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20metal"
              />
              <CardCatalog
                imagepath="../images/general/catalog/acero.jpg"
                title="ACERO"
                description="Stock > 53 toneladas"
                buttoncolor="#155C22"
                buttonlink="https://wa.me/+51925531984?=Hola%20quiero%20saber%20el%20precio%20de%20acero"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
  