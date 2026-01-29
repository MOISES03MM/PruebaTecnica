import React from "react";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const NavbarPublico = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building2 className="text-[#1e3a8a]" size={28} />
          <span className="text-xl font-bold text-gray-900">Sistema de Reservas</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-700 font-bold text-sm hover:text-[#1e3a8a]">
            Iniciar Sesión
          </Link>
          <Link to="/registro" className="bg-[#1e3a8a] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-900 transition-all">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPublico;