import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, LayoutDashboard, Building, CalendarDays, ClipboardCheck, BarChart3, UserCircle } from "lucide-react";
import MenuPerfil from "./MenuPerfil"; 

const NavbarPrivado = ({ usuario, cerrarSesion }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Building2 className="text-[#1e3a8a]" size={28} />
            <span className="text-xl font-bold text-gray-900">Sistema de Reservas</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLinkPrivado to="/inicio" Icono={LayoutDashboard} texto="Dashboard" activa={location.pathname === "/inicio"} />
            <NavLinkPrivado to="/sala" Icono={Building} texto="Salas" activa={location.pathname === "/sala"} />
            <NavLinkPrivado to="/mis-reservas" Icono={CalendarDays} texto="Mis Reservas" activa={location.pathname === "/mis-reservas"} />
            <NavLinkPrivado to="/coordinador" Icono={ClipboardCheck} texto="Coordinador" />
            <NavLinkPrivado to="/reportes" Icono={BarChart3} texto="Reportes" />
          </div>

          <div className="relative">
            <button onClick={() => setMenuAbierto(!menuAbierto)} className="p-1 rounded-full hover:bg-gray-100">
              <UserCircle size={32} className="text-gray-400" />
            </button>
            {menuAbierto && (
              <MenuPerfil usuario={usuario} cerrarSesion={cerrarSesion} alCerrarMenu={() => setMenuAbierto(false)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinkPrivado = ({ to, Icono, texto, activa }) => (
  <Link to={to} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activa ? "bg-blue-50 text-[#1e3a8a]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}>
    <Icono size={18} /> {texto}
  </Link>
);

export default NavbarPrivado;