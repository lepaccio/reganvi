import React from 'react';

type TitleProps = {
  children: React.ReactNode; // El contenido que irá dentro del componente
  className?: string; // Permitir clases adicionales opcionales
};

export function NavItemText({ children, className = "" }: TitleProps) {
    return (
        <span
            className={`${className} font-montserrat font-medium lg:text-[22px] lg:leading-[28px] ${className}`}
        >
            {children}
        </span>
    );
}    

export function TitleSection({ children, className = "" }: TitleProps) {
  return (
    <h2
      className={`text-[#155C22] font-montserrat text-center
        sm:text-[32px] sm:leading-[40px]
        lg:text-[57px] lg:leading-[64px] tracking-[-0.25px]
        ${className}`}
    >
      {children}
    </h2>
  );
}

export function CardTitleIndex({ children, className = "" }: TitleProps) {
    return (
      <h3
        className={`text-white ${className} font-montserrat font-semibold sm:text-[24px] sm:leading-8 lg:text-[45px] lg:leading-[55px] ${className}`}   
      >
        {children}
      </h3>
    );
}

export function CardDescription ({ children, className = "" }: TitleProps) {
    return (
      <p
        className={`text-white ${className} font-raleway font-medium 
        sm:text-[14px] sm:leading-4 
        lg:text-[24px] lg:leading-[28px] 
        ${className}`}
      >
        {children}
      </p>
    );
}