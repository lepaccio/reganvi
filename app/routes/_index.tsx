// app/routes/index.tsx
import { MetaFunction } from "@remix-run/node";
import { TitleSection } from "../components/text-components";
import { CardIndex, CardStadistics } from "../components/cards-components";
import { WhatsAppIcon } from "../components/icons-components";
import "public/styles/index-custom.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Reganvi" },
    { name: "description", content: "Bienvenido a la página principal de Reganvi." },
    { name: "keywords", content: "reciclaje, materiales reciclados, proveedores, provedores de materiales reciclados, Reganvi"},
    { name: "category", content: "Reciclaje" },
  ];
};

export default function Index() {
  return (
    <>
      {/* Sección de Presentación */}
      <section className="w-full flex items-center justify-center bg-[#81C244] bg-gradient-circular">
        <div className="w-[1244px] flex justify-between text-center my-8 px-1">
          <div className="flex flex-col text-left">
            <div>
              <h1 className="font-montserrat font-bold text-[72px] leading-[80px] ">
                <p className="text-[#155C22]">Re<span className="text-white">cicla</span></p>
                <p className="text-[#155C22]">Gan<span className="text-white">a</span></p>
                <p className="text-[#155C22]">Vi<span className="text-white">ve</span></p>
              </h1>
            </div>
            <div>
              <p className="font-raleway font-regular text-[22px] leading-[26px] text-left w-[383px]">
                Con Reganvi, encuentra los mejores
                proveedores de materiales reciclados
                a un click
              </p>
            </div>
          </div>
          <div>
            <img src="../images/general/object.svg" alt="Hero"/>
          </div>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="w-full flex items-center justify-center bg-[#DEDEDE]">
        <div className="w-[1244px] flex flex-col justify-between text-center my-4 gap-2">
          <div className="w-full flex items-center justify-center py-4">
            <TitleSection>Comercializa con nosotros</TitleSection>
          </div>
          <div className="w-full flex items-center justify-center gap-9"> {/* contenedor de las cards */}
            <div> {/* card venta */}
              <CardIndex
                bgcolor="bg-[#8BB663]"
                title="Quiero vender"
                imageSrc="../images/general/person.svg"
                description="Ofrece tus materiales reciclados y conecta con empresas que los necesitan."
                buttonText="OFRECE"
                buttonBgColor="#238235"
                buttonLink="https://wa.me/+51925531984?=Hola%20quiero%20vender%20materiales"
                onButtonClick={() => {}}
              />
            </div>
            <div> {/* card compra */}
            <CardIndex
                bgcolor="bg-[#66ACCE]"
                title="Quiero comprar"
                imageSrc="../images/general/company.svg"
                description="Encuentra y compra materiales reciclados para tu proceso de producción."
                buttonText="COMPRA"
                buttonBgColor="#0A3C5F"
                buttonLink="https://wa.me/+51925531984?=Hola%20quiero%20comprar%20materiales"
                onButtonClick={() => {}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Metricas */}
      <section className="w-full flex flex-col bg-[] items-center justify-center pt-8 gap-8 bg-[#DEDEDE]">
        <div>
          <TitleSection className="text-[#3D667A]">
            ¿Porque REGANVI?
          </TitleSection>
        </div>
        <div className="w-full bg-[#3D667A] flex justify-center py-8">
          <div className="w-[1016px] flex flex-col items-center justify-center px-8 gap-1">
            <div className="w-full flex justify-center items-center py-4"> {/* descripción estadisticas*/}
              <p className="font-raleway font-semibold text-[32px] leading-none">Nuestras estadisticas 2024</p>
            </div>
            <div className="grid grid-cols-3"> {/* contenedor de las estadisticas */}
              <CardStadistics
                value="+50"
                description="Empresas"
              />
              <CardStadistics
                value="+700"
                description="Comunidad"
              />
              <CardStadistics
                value="+200 TN"
                description="Materiales"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full flex justify-center bg-[url('../public/images/general/reganvi-foto-1.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Filtro */}
        <div className="relative w-[1224px] flex flex-col justify-center items-center py-8 gap-8"> {/* Contenedor */}
          <div> {/* Título */}
            <TitleSection className="text-white">
              Algunos de nuestros socios
            </TitleSection>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-8"> {/* Logos */}
            <div className="w-full flex justify-around items-center">
                <img src="../images/logos/pamolsa-logo.svg" alt="" />
                <img src="../images/logos/smi-logo.svg" alt="" />
                <img src="../images/logos/solpack-logo.svg" alt="" />
            </div>
            <div className="w-full flex justify-around items-center">
                <img src="../images/logos/gyf-logo.svg" alt="" />
                <img src="../images/logos/papelera-logo.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Código existente */}
      
      {/* Burbuja flotante de WhatsApp */}
      <a
          href="https://wa.me/+14243737214?text=Hola%20quiero%20saber%20cuanto%20cuesta%20un%20material"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full shadow-lg"
        >
        <div className="fixed bottom-10 right-10 bg-white rounded-[48px] shadow-[5px_5px_10px_rgba(0,0,0,0.5)]">
          {/* Circulo Principal */}
          <img src="../images/logos/reganvi-logo.svg" alt="WhatsApp" className="m-4 w-12 h-12"/>

          {/* Circulo pequeño de IA */}
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/8 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
            IA
          </div>
        </div>
      </a>
    </>
  );
}
