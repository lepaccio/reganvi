import React, {useState} from "react";
import { CardTitleIndex , CardDescription } from "./text-components";
import { Link } from "@remix-run/react";
import { WhatsAppIcon } from "./icons-components";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

type CardProps = {
    bgcolor?: string;
    title: string;
    imageSrc: string;
    description: string;
    buttonText: string;
    buttonBgColor?: string;
    buttonLink?: string;
    onButtonClick?: () => void;
    };

export function CardIndex({
    bgcolor,
    title, 
    imageSrc, 
    description, 
    buttonText, 
    buttonBgColor = "#81C244",
    buttonLink = "#",
    onButtonClick,
}: CardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
         className={`w-[496px] flex flex-col items-center px-4 py-4 ${bgcolor}`} 
         style={{
            borderRadius: '16px',
            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 100%)',
            boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.45)',
         }}
        > {/* contenedor de la card */}
            <div className="w-full flex justify-center pb-4"> {/* contenedor del título de card*/}
                <CardTitleIndex>{title}</CardTitleIndex>
            </div>
            <hr className="w-3/4 border-white"/>
            <div className="w-full h-[150px] flex justify-center my-4"> {/* contenedor de la imagen */}
                <img src={imageSrc} alt={title} />
            </div>
            <div className="w-[288px] h-[144px] flex justify-center items-center py-4 font-medium"> {/* contenedor de la descripción */}
                <CardDescription>{description}</CardDescription>
            </div>
            <div className="w-full flex justify-center py-4"> {/* contenedor del botón */}
                <a
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onButtonClick}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        backgroundColor: hovered ? "#DEDEDE" : buttonBgColor,
                        color: hovered ? buttonBgColor : 'white',
                        borderColor: buttonBgColor,
                        borderWidth: hovered ? '2px' : '2px',
                        borderStyle: 'solid',

                    }}
                    className={`
                        w-[288px] px-4 py-3 rounded-full 
                        flex items-center justify-center gap-2
                        transition-colors duration-300
                        `}
                >
                    <WhatsAppIcon color={hovered? buttonBgColor : "white"}/>
                    <span className="font-montserrat font-semibold text-[24px] tracking-normal leading-none">
                        {buttonText} 
                    </span>
                </a>
            </div>
        </div>
    );
}

type CardStadisticsProps = {
    value: string;
    description: string;
};

export function CardStadistics({
    value,
    description,
}: CardStadisticsProps) {
    return (
        <div className="w-[238px] flex flex-col justify-center items-center py-4">
          <div className="font-montserrat font-bold text-[45px] leading-none">
            <p>{value}</p>
          </div>
          <div className="font-raleway font-medium text-[24px] leading-none">
            <p>{description}</p>
          </div>
        </div>
    );

}

type CardCatalogProps = {
    imagepath: string;
    title: string;
    description: string;
    buttoncolor: string;
    buttonlink: string;
}; 

export function CardCatalog({
    imagepath,
    title,
    description,
    buttoncolor,
    buttonlink,
}: CardCatalogProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="w-[288px] h-[443px] bg-white flex flex-col justify-center items-center p-4 gap-4 rounded-[24px] shadow-[4px_8px_8px_rgba(0,0,0,0.45)]"> {/*Card general*/}
            <div className="w-[256px] h-[283px]"> {/*Imagen*/}
                <img 
                    src={imagepath}
                    className="w-full h-full object-cover object-center rounded-[16px]"
                />
            </div>
            <div className="w-full flex flex-col font-montserrat" style={{color: buttoncolor}}> {/*description*/}
                <p className="text-[22px] font-semibold leading-[28px]">
                    {title}
                </p>
                <p className="text-[16px] font-medium leading-[24px]" style={{opacity: 0.6}}>
                    {description}
                </p>
            </div>
            <div className="w-full flex justify-end"> {/*Botón*/}
                <a 
                    href={buttonlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        backgroundColor: hovered ? "#DEDEDE" : buttoncolor,
                        color: hovered ? buttoncolor : 'white',
                        borderColor: buttoncolor,
                        borderWidth: hovered ? '2px' : '2px',
                        borderStyle: 'solid',
                    }}
                    className="w-[132px] px-6 py-2 rounded-full flex items-center justify-center gap-2 transition-colors duration-300"
                >
                    <WhatsAppIcon color={hovered ? buttoncolor : "white"} width="20" height="20"/>
                    <span className="font-montserrat font-semibold text-[16px] tracking-normal leading-none">
                        Cotizar
                    </span>
                </a>
            </div>           
        </div>
    );
}

type CardUsProps={
    title: string;
    description: string;
    imagepath: string;
    reverseOrder?: boolean;
    imageOffset?: string
    style?: React.CSSProperties & {
        "--custom-img-width"?: string;
        "--custom-img-height"?: string;
    };
};

export function CardUs({
    title,
    description,
    imagepath,
    reverseOrder = false,
    imageOffset = "0",
    style,
}: CardUsProps) {
    return (
        <div 
            className={`w-full flex gap-12
            ${reverseOrder ? "flex-row-reverse" : "flex-row"
            }`}
            style={style}
        >
            {/*Contenedor de texto*/}
            <div className="w-full flex flex-col justify-center items-center gap-4"> 
                <h3 className="font-montserrat font-medium text-center text-[32px] text-[#155C22] leading-10">
                    {title}
                </h3>
                <p className="font-raleway font-medium text-[16px] text-black text-justify leading-6 tracking-[0.5px]">
                    {description}
                </p>
            </div>
            {/*Contenedor de imagen*/}
            <div className="w-full h-[390px] overflow-hidden relative rounded-[16px]">
                <img 
                    src={imagepath} 
                    alt={title} 
                    className="absolute top-0 left-0 w-auto h-auto object-cover"
                    style={{
                        width: "var(--custom-img-width, 100%)",
                        height: "var(--custom-img-height, 100%)",
                        transform: `translateY(${imageOffset})`,
                    }}
                />
            </div>
        </div>
    );
}
