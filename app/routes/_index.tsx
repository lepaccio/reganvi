// app/routes/index.tsx
import { MetaFunction } from "@remix-run/node";
import {TitleSection} from "../components/text-components";
import { CardIndex, CardStadistics } from "../components/cards-components";
import "public/styles/index-custom.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Reganvi" },
    { name: "description", content: "Bienvenido a la página principal de Reganvi." },
  ];
};

export default function Index() {
  return (
    < >
      {/* Sección de Presentación */}
      <section className="w-full flex items-center justify-center bg-[#81C244] bg-gradient-circular">
        <div className="w-[1244px] flex justify-between text-center my-8">
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
          <div className="w-full flex items-center justify-center">
            <TitleSection>Comercia con nosotros</TitleSection>
          </div>
          <div className="w-full flex items-center justify-center gap-9"> {/* contenedor de las cards */}
            <div> {/* card venta */}
              <CardIndex
                bgcolor="bg-[#8BB663]"
                title="Quiero vender"
                imageSrc="../images/general/person.svg"
                description="Ofrece tus materiales reciclados y conecta con empresas que los necesitan."
                buttonText="OFRECE"
                buttonBgColor="bg-[#238235]"
                buttonLink="#"
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
                buttonBgColor="bg-[#0A3C5F]"
                buttonLink="#"
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
            <div className="grid grid-cols-4"> {/* contenedor de las estadisticas */}
              <CardStadistics
                value="+30"
                description="Empresas"
              />
              <CardStadistics
                value="+700"
                description="Comunidad"
              />
              <CardStadistics
                value="+120 TN"
                description="Materiales"
              />
              <CardStadistics
                value="+$7.5K"
                description="Ventas"
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


      {/* Footer */}
      <footer className="w-full flex justify-center bg-[#191919] text-center text-white pt-8 pb-32">
        <div className="w-[1224px] flex justify-between">
          <div className="flex flex-col gap-6">
            <div> {/* Logo */}
              <img src="../images/logos/reganvi-logo.svg" alt="" />
            </div>
            <div className="h-[106px] mini-text gap-1">
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight">Reganvi</p>
              <p>© 2023 Reganvi Perú</p>
            </div>
          </div>
          <div className="flex flex-col items-start text-left gap-6"> {/* Contacto */}
            <div>
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight gap-1">Contacto</p>
            </div>
            <div className="h-[106] mini-text">
              <p>Teléfono: +51 925 531 984</p>
              <p>Email: reganvi.pe@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-6"> {/* Redes Sociales */}
            <div>
              <p className="font-raleway font-medium text-[20px] text-start leading-none tracking-tight">Siguenos</p>
            </div>
            <div className="h-[106px] flex flex-col items-start mini-text gap-1">
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
            <div className="h-[106px] mini-text">
              <p>Terminos y condiciones</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
