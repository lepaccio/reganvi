import { NavLink } from "@remix-run/react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full bg-white text-black flex justify-around items-center h-[72px] border-t border-gray-200 z-50 px-4 font-raleway font-semibold text-[12px] leading-4 tracking-[0.5px]">
      {/* Link: Inicio */}
      <div className="w-full py-3">
        <NavLink
          to="/"
          className={"flex flex-col items-center gap-1"}
        >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <div className={`
              px-6 py-1 rounded-[16px] 
              ${isActive ? "bg-[#DFF8DE]" : "bg-white"}
            `}>
              <img src="../images/icons/bottombar-icons/home-icon.svg" alt="incio icon" />
            </div>
            <span className="text-[12px] leading-4 text-[#155C22]">Inicio</span>
          </>
        )}
        </NavLink>
      </div>

      {/* Link: Catálogo */}
      <div className="w-full py-3">
        <NavLink
          to="/catalogo"
          className={"flex flex-col items-center gap-1"}
        >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <div className={`
              px-6 py-1 rounded-[16px] 
              ${isActive ? "bg-[#DFF8DE]" : "bg-white"}
            `}>
              <img src="../images/icons/bottombar-icons/store-icon.svg" alt="catalogo icon" />
            </div>
            <span className="text-[12px] leading-4 text-[#155C22]">Catálogo</span>
          </>
        )}
        </NavLink>
      </div>

      {/* Link: Nosotros */}
      <div className="w-full py-3">
        <NavLink
          to="/nosotros"
          className={"flex flex-col items-center gap-1"}
        >
        {({ isActive }: { isActive: boolean }) => (
          <>
            <div className={`
              px-6 py-1 rounded-[16px] 
              ${isActive ? "bg-[#DFF8DE]" : "bg-white"}
            `}>
              <img src="../images/icons/bottombar-icons/info-icon.svg" alt="nosotros icon" />
            </div>
            <span className="text-[12px] leading-4 text-[#155C22]">Nosotros</span>
          </>
        )}
        </NavLink>
      </div>
    </div>
  );
}
