import React from "react";
import {
  MapPin,
  Users,
  Monitor,
  Projector,
  Video,
  ClipboardList,
  Volume2,
} from "lucide-react";

const DetalleSalaInfo = ({ sala }) => {
  const getIcon = (nombre) => {
    const n = nombre?.toLowerCase() || "";
    if (n.includes("pantalla")) return <Monitor size={16} />;
    if (n.includes("proyector")) return <Projector size={16} />;
    if (n.includes("videollamada")) return <Video size={16} />;
    if (n.includes("pizarra")) return <ClipboardList size={16} />;
    if (n.includes("audio")) return <Volume2 size={16} />;
    return <ClipboardList size={16} />;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <img
        src={
          sala?.imagen ||
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800"
        }
        alt={sala?.nombre}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {sala?.nombre || "Cargando..."}
        </h1>

        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <MapPin size={18} className="text-gray-400" />
          <span>{sala?.ubicacion}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-800 font-medium mb-8 pb-6 border-b border-gray-100">
          <Users size={20} className="text-gray-400" />
          <span>
            Capacidad:{" "}
            <span className="font-bold">{sala?.capacidad} personas</span>
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
          Equipamiento Disponible
        </h3>
        <div className="flex flex-wrap gap-3">
          {sala?.equipos?.map((eq) => (
            <span
              key={eq.id}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md text-sm text-gray-700 font-medium"
            >
              {getIcon(eq.nombre)}
              {eq.nombre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetalleSalaInfo;
