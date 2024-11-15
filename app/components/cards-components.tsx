import React from "react";
import { CardTitleIndex , CardDescription } from "./text-components";
import { Link } from "@remix-run/react";

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
    buttonBgColor = "bg-[#81C244]",
    buttonLink = "#",
    onButtonClick,
}: CardProps) {
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
                <Link
                    to={buttonLink}
                    className={`${buttonBgColor} text-white w-[288px] px-4 py-3 rounded-full flex items-center justify-center gap-2`}
                    onClick={onButtonClick}
                >
                    <img src="../images/icons/whatsapplogo.svg" alt="logo whatsapp" />
                    <span className="font-montserrat font-semibold text-[24px] tracking-normal leading-none">
                        {buttonText} 
                    </span>
                </Link>
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