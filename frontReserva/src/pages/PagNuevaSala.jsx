import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FormularioNuevaSala from "../components/FormularioNuevaSala";

const PaginaNuevaSala = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-12">
        Nueva Sala de Reuniones
      </h1>

      <div className="w-full max-w-2xl">
        <button
          onClick={() => navigate("/salas")}
          className="flex items-center gap-2 text-gray-900 hover:text-gray-600 mb-8 font-semibold transition-colors"
        >
          <ChevronLeft size={20} />
          Volver a Salas
        </button>

        <div className="flex justify-center">
          <FormularioNuevaSala />
        </div>
      </div>
    </div>
  );
};

export default PaginaNuevaSala;
