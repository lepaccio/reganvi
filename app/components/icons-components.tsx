import React from "react";

type WhatsAppIconProps = {
    color?: string;
    width?: string;
    height?: string;
};

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
    color = "currentColor", 
    width = "24",
    height = "24", 
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
    >
        <g clipPath="url(url(#clip0_385_29200))">
            <path className="fill-current" d="M18.2584 13.9103C18.2116 13.8878 16.462 13.0262 16.151 12.9143C16.0241 12.8688 15.8881 12.8243 15.7435 12.8243C15.5073 12.8243 15.3088 12.942 15.1542 13.1733C14.9794 13.4331 14.4503 14.0515 14.2868 14.2363C14.2655 14.2607 14.2363 14.2898 14.2189 14.2898C14.2032 14.2898 13.9324 14.1783 13.8505 14.1427C11.9736 13.3274 10.5489 11.3668 10.3536 11.0362C10.3257 10.9887 10.3245 10.9671 10.3243 10.9671C10.3311 10.9419 10.3942 10.8786 10.4268 10.846C10.5221 10.7517 10.6254 10.6274 10.7253 10.5072C10.7726 10.4502 10.8199 10.3932 10.8664 10.3394C11.0114 10.1708 11.0759 10.0399 11.1507 9.88825L11.1899 9.80947C11.3726 9.44658 11.2166 9.14035 11.1661 9.04147C11.1248 8.95871 10.386 7.1757 10.3074 6.98838C10.1186 6.53635 9.86897 6.32588 9.52214 6.32588C9.48996 6.32588 9.52214 6.32588 9.38718 6.33157C9.22284 6.33851 8.3279 6.45632 7.93222 6.70575C7.5126 6.9703 6.80273 7.81357 6.80273 9.29658C6.80273 10.6313 7.64975 11.8915 8.01341 12.3708C8.02245 12.3829 8.03905 12.4075 8.06312 12.4427C9.45583 14.4766 11.192 15.9839 12.952 16.687C14.6464 17.3639 15.4488 17.4421 15.905 17.4421H15.905C16.0967 17.4421 16.2502 17.4271 16.3855 17.4137L16.4714 17.4055C17.0567 17.3536 18.3431 16.6871 18.6357 15.874C18.8662 15.2335 18.9269 14.5338 18.7736 14.2799C18.6686 14.1072 18.4875 14.0203 18.2584 13.9103Z"/>
            <path className="fill-current" d="M12.713 0.119537C6.21307 0.119537 0.924969 5.3679 0.924969 11.819C0.924969 13.9055 1.48336 15.9479 2.54115 17.7355L0.516501 23.7078C0.478787 23.8191 0.506839 23.9423 0.589203 24.0261C0.648657 24.0868 0.729307 24.1195 0.81167 24.1195C0.843229 24.1195 0.875021 24.1148 0.906034 24.1049L7.13357 22.126C8.83772 23.0365 10.7638 23.5171 12.7131 23.5171C19.2124 23.5172 24.5 18.2694 24.5 11.819C24.5 5.3679 19.2124 0.119537 12.713 0.119537ZM12.713 21.0801C10.8788 21.0801 9.10227 20.5505 7.57515 19.5484C7.5238 19.5147 7.46419 19.4974 7.40419 19.4974C7.37247 19.4974 7.34068 19.5022 7.30975 19.512L4.19014 20.5036L5.1972 17.5325C5.22977 17.4364 5.21349 17.3303 5.15349 17.2484C3.99058 15.6594 3.37585 13.782 3.37585 11.819C3.37585 6.71175 7.56448 2.55663 12.7129 2.55663C17.8608 2.55663 22.0489 6.71175 22.0489 11.819C22.049 16.9256 17.8609 21.0801 12.713 21.0801Z"/>
        </g>
        <defs>
            <clipPath id="clip0_385_29200">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);
