import React, {useState} from "react";
import { CardTitleIndex , CardDescription } from "./text-components";
import { WhatsAppIcon } from "./icons-components";

type CardProps = {
    bgcolor?: string;
    title: string;
    imageSrcLarge: string;
    imageSrcSmall: string;
    description: string;
    buttonText: string;
    buttonBgColor?: string;
    buttonLink?: string;
    onButtonClick?: () => void;
    };

export function CardIndex({
    bgcolor,
    title, 
    imageSrcLarge,
    imageSrcSmall, 
    description, 
    buttonText, 
    buttonBgColor = "#81C244",
    buttonLink = "#",
    onButtonClick,
}: CardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
         className={`w-full sm:w-[343px] md:w-[400px] lg:w-[496px]  flex flex-col items-center justify-center px-4 py-4 ${bgcolor}`} 
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
            <div className="w-full h-[118px] md:h-[150px] flex justify-center my-4"> {/* contenedor de la imagen */}
                <img src={imageSrcSmall} alt={title} className="md:hidden"/>
                <img src={imageSrcLarge} alt={title} className="hidden md:block"/>
            </div>
            <div className="sm:w-[263px] sm:h-[60px] lg:w-[288px] lg:h-[144px] flex justify-center items-center py-4 px-4 font-medium"> {/* contenedor de la descripción */}
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
                        sm:w-[156px] md:w-[200px] lg;w-[288px] px-4 py-3 rounded-full 
                        flex items-center justify-center gap-2
                        transition-colors duration-300
                        `}
                >
                    <WhatsAppIcon color={hovered? buttonBgColor : "white"}/>
                    <span className="font-montserrat font-semibold sm:text-[14px] lg:text-[24px] tracking-normal leading-none">
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
        <div className="flex flex-col justify-center items-center py-4 gap-2
            sm:w-[125px]
            md:w-[238px]    
        ">
          <div className="font-montserrat font-bold leading-none
            sm:text-[24px]
            md:text-[45px]
          ">
            <p>{value}</p>
          </div>
          <div className="font-raleway font-medium leading-none
            sm:text-[14px]
            lg:text-[24px]
          ">
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
        <div className="bg-white flex justify-center items-center p-4 gap-4 rounded-[24px] shadow-[4px_8px_8px_rgba(0,0,0,0.45)]
            w-[342px] h-[190px] 
            md:w-[288px] md:h-[443px] md:flex-col
        "> {/*Card general*/}
            <div className="sm:w-full sm:h-full md:w-[256px] md:h-[283px]"> {/*Imagen*/}
                <img 
                    src={imagepath}
                    className="w-full h-full md:h-[283px] object-cover object-center rounded-[16px]"
                    alt="imagen de catalogo"
                />
            </div>
            <div className="w-full h-full flex flex-col justify-between font-montserrat" style={{color: buttoncolor}}> {/*description*/}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-[14px] leading-[20px] md:text-[22px] md:leading-[28px]">
                        {title}
                    </p>
                    <p className="font-medium text-[11px] leading-[16px] md:text-[16px] md:leading-[24px]" style={{opacity: 0.6}}>
                        {description}
                    </p>
                </div>
                <div className="flex justify-end pt-4">
                {/* boton */}
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
                        className="sm:w-[94px] sm:px-4 md:w-[132px] md:px-6 py-2 rounded-full flex items-center justify-center gap-1 md:gap-2 transition-colors duration-300"
                    >
                        <WhatsAppIcon color={hovered ? buttoncolor : "white"} width="20" height="20"/>
                        <span className="font-montserrat font-semibold text-[11px] md:text-[16px] tracking-normal leading-none">
                            Cotizar
                        </span>
                    </a>
                </div>
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
            className={`w-full flex flex-col gap-4 md:flex-row md:gap-12
            ${reverseOrder ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            style={style}
        >
            {/*Contenedor de texto*/}
            <div className="w-full flex flex-col justify-center items-center gap-4"> 
                <h3 className="font-montserrat font-medium text-center text-[#155C22] 
                    text-[24px] leading-8
                    md:text-[32px]  md:leading-10">
                    {title}
                </h3>
                <p className="font-raleway font-medium text-black text-justify 
                    text-[14px] leading-5 tracking-[0.5px]
                    md:text-[16px] md:leading-6 md:tracking-[0.5px]"
                >
                    {description}
                </p>
            </div>
            {/*Contenedor de imagen*/}
            <div className="w-full h-[240px] md:h-[390px] overflow-hidden relative rounded-[16px]">
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
