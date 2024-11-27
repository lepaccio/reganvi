// app/routes/index.tsx
import { MetaFunction } from "@remix-run/node";
import { TitleSection } from "../components/text-components";
import { CardIndex, CardStadistics } from "../components/cards-components";
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
      <section className="w-full flex items-center justify-center sm:bg-[#7ECA38] md:bg-[#81C244] bg-gradient-circular relative">
        <div className="flex justify-between text-center my-8 px-4 w-full 
          sm:items-center sm:w-[375px]
          md:w-[1224px]"
        >
          {/* Contenedor de texto */}
          <div className="flex text-left relative z-10
            sm:items-center sm:gap-2
            md:items-start md:flex-col md:w-1/2 md:gap-4">
            <div>
              <h1 className="font-montserrat font-bold
                text-[48px] leading-[56px]
                md:text-[72px] md:leading-[80px]"
              >
                <p className="text-[#155C22]">
                  Re<span className="text-white">cicla</span>
                </p>
                <p className="text-[#155C22]">
                  Gan<span className="text-white">a</span>
                </p>
                <p className="text-[#155C22]">
                  Vi<span className="text-white">ve</span>
                </p>
              </h1>
            </div>
            <div>
              <p className="font-raleway font-regular text-left w-full
                text-[16px leading-[22px] text-center
                md:text-[22px] md:leading-[26px] md:w-[383px]">
                Con Reganvi, encuentra los mejores proveedores de materiales
                reciclados a un click
              </p>
            </div>
          </div>
          {/* Imagen principal */}
          <div className="w-full md:w-1/2 flex justify-center sm:hidden md:block">
            <img src="../images/general/object.svg" alt="Hero" className=" md:max-w-full" />
          </div>
        </div>
        {/* Imagen como fondo mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-black bg-opacity-25 w-full filter opacity-20 md:hidden" 
          /*style={{backgroundImage: 'url(../images/general/object.png)'}}*//>
      </section>

      {/* Sección de Información */}
      <section className="w-full flex items-center justify-center bg-[#DEDEDE]">
        <div className="w-full sm:w-[343px] md:w-[1244px] flex flex-col justify-between text-center my-4 px-4 gap-4">
          {/* Título */}
          <div className="w-full flex items-center justify-center py-4">
            <TitleSection>Comercializa con nosotros</TitleSection>
          </div>
          {/* Contenedor de las cards */}
          <div className="w-full grid grid-cols-1 customcard:grid-cols-2 place-items-center items-center gap-6">
            {/* Card: Venta */}
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
            {/* Card: Compra */}
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
      </section>

      {/* Sección de Métricas */}
      <section className="w-full flex flex-col items-center justify-center pt-8 gap-8 bg-[#DEDEDE]">
        <div>
          <TitleSection className="text-[#3D667A] text-[20px] md:text-[24px]">
            ¿Porque REGANVI?
          </TitleSection>
        </div>
        {/* Contenedor de estadísticas */}
        <div className="w-full bg-[#3D667A] flex flex-col items-center py-8 px-4 gap-4">
          <p className="font-raleway font-semibold text-[24px] md:text-[32px] leading-none text-center">
            Nuestras estadísticas 2024
          </p>
          <div className="flex justify-between">
            <CardStadistics value="+50" description="Empresas" />
            <CardStadistics value="+700" description="Comunidad" />
            <CardStadistics value="+200 TN" description="Materiales" />
          </div>
        </div>
      </section>

      {/* Sección de Socios */}
      <section className="relative w-full flex justify-center bg-[url('../public/images/general/reganvi-foto-1.webp')] bg-cover bg-center">
        {/* Filtro */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative w-[342px] md:w-[1224px] flex flex-col justify-center items-center py-8 px-4 gap-8">
          {/* Título */}
          <div>
            <TitleSection className="text-white">
              Algunos de nuestros socios
            </TitleSection>
          </div>
          {/* Logos */}
          <div className="w-full
            flex flex-col gap-2 
            md:grid md:grid-cols-6 md:gap-x-[72px] md:gap-y-8 place-items-center">
            {/* Primera fila */}
            <div className="flex justify-center sm:h-[112px] md:col-span-2">
              <img src="../images/logos/pamolsa-logo.svg" alt="Pamolsa" className="sm:max-w-[242px] md:max-w-[340px]" />
            </div>
            <div className="flex justify-center sm:h-[112px] md:col-span-2">
              <img src="../images/logos/smi-logo.svg" alt="SMI" className="sm:max-w-[242px] md:max-w-[340px]" />
            </div>
            <div className="flex justify-center sm:h-[112px] md:col-span-2">
              <img src="../images/logos/solpack-logo.svg" alt="Solpack" className="sm:max-w-[242px] md:max-w-[340px]" />
            </div>
            <div className="flex justify-center sm:h-[112px] md:col-span-3">
              <img src="../images/logos/gyf-logo.svg" alt="GYF" className="sm:max-w-[242px] md:max-w-[340px]" />
            </div>
            <div className="flex justify-center sm:h-[112px] md:col-span-3">   
              <img src="../images/logos/papelera-logo.svg" alt="Papelera" className="sm:max-w-[242px] md:max-w-[340px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Burbuja flotante de WhatsApp */}
      <a
        href="https://wa.me/+14243737214?text=Hola%20quiero%20saber%20cuanto%20cuesta%20un%20material"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-lg hidden md:block"
      >
        <div className="fixed bottom-10 right-10 bg-white rounded-[48px] shadow-[5px_5px_10px_rgba(0,0,0,0.5)]">
          {/* Circulo Principal */}
          <img
            src="../images/logos/reganvi-logo.svg"
            alt="WhatsApp"
            className="m-4 w-12 h-12"
          />
          {/* Circulo pequeño de IA */}
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/8 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
            IA
          </div>
        </div>
      </a>
    </>
  );
}

