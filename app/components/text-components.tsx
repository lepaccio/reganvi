import React from 'react';

type TitleProps = {
  children: React.ReactNode; // El contenido que irá dentro del componente
  className?: string; // Permitir clases adicionales opcionales
};

export function NavItemText({ children, className = "" }: TitleProps) {
    return (
        <span
            className={`${className} font-montserrat font-medium text-[22px] leading-[28px] ${className}`}
        >
            {children}
        </span>
    );
}    

export function TitleSection({ children, className = "" }: TitleProps) {
  return (
    <h2
      className={`text-[#155C22] ${className}`}
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'regular',
        fontSize: '57px',
        lineHeight: '64px',
        letterSpacing: '-0.25px',
      }}
    >
      {children}
    </h2>
  );
}

export function CardTitleIndex({ children, className = "" }: TitleProps) {
    return (
      <h3
        className={`text-white ${className} font-montserrat font-semibold text-[45px] leading-[55px] ${className}`}   
      >
        {children}
      </h3>
    );
}

export function CardDescription ({ children, className = "" }: TitleProps) {
    return (
      <p
        className={`text-white ${className} font-raleway font-medium text-[24px] leading-[28px] ${className}`}
      >
        {children}
      </p>
    );
}