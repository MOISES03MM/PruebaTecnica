import React from "react";
import { Link } from "react-router-dom";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const AccionesRapidas = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
      <h3 className="text-lg font-bold text-gray-800">Acciones Rápidas</h3>
      <p className="text-gray-500 text-sm mb-6">
        Gestiona tus reservas y salas
      </p>

      <div className="space-y-3">
        <Link
          to="/sala"
          className="w-full bg-[#1e3a8a] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-blue-900 transition-all shadow-md active:scale-[0.98]"
        >
          <Building2 size={18} />
          <span className="font-bold text-sm">Ver Salas Disponibles</span>
        </Link>

        <Link
          to="/mis-reservas"
          className="w-full bg-white text-gray-700 border border-gray-200 py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-sm active:scale-[0.98]  hover:bg-cyan-500 group"
        >
          <Calendar
            size={18}
            className="group-hover:text-white transition-colors"
          />
          <span className="font-bold text-sm group-hover:text-white">
            Mis Reservas
          </span>
        </Link>

        <button className="w-full bg-white text-gray-700 border border-gray-200 py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-sm active:scale-[0.98] hover:bg-cyan-500  group">
          <CheckCircle2
            size={18}
            className="group-hover:text-white transition-colors"
          />
          <span className="font-bold text-sm group-hover:text-white">
            Panel de Coordinador
          </span>
        </button>
      </div>
    </div>
  );
};

export default AccionesRapidas;
