import React from 'react';
import { LogOut, User } from 'lucide-react';

const MenuPerfil = ({ usuario, cerrarSesion, alCerrarMenu }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-200">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-900">
          {usuario?.nombre || "Usuario"}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {usuario?.correo || "correo@empresa.com"}
        </p>
      </div>
      <button
        onClick={() => {
          cerrarSesion();
          alCerrarMenu();
        }}
        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors group"
      >
        <LogOut size={18} className="text-gray-400 group-hover:text-red-600" />
        <span className="font-medium">Cerrar Sesión</span>
      </button>
    </div>
  );
};

export default MenuPerfil;