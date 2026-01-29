import React from 'react';
import { MapPin, Users, Edit, Monitor, Projector, Video, ClipboardList, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const SalaCard = ({ sala }) => {
  const navigate = useNavigate();
    const getIcon = (nombre) => {
      
    switch (nombre.toLowerCase()) {
      case 'pantalla': return <Monitor size={14} />;
      case 'proyector': return <Projector size={14} />;
      case 'videollamada': return <Video size={14} />;
      case 'pizarra': return <ClipboardList size={14} />;
      case 'audio': return <Volume2 size={14} />;
      default: return <ClipboardList size={14} />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img 
          src={sala.imagen || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400"} 
          alt={sala.nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{sala.nombre}</h3>
          <button className="text-gray-400 hover:text-blue-600 transition-colors">
            <Edit size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <MapPin size={16} className="text-gray-400" />
          <span>{sala.ubicacion}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700 text-sm mb-4 font-medium">
          <Users size={16} className="text-gray-400" />
          <span>Capacidad: {sala.capacidad} personas</span>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Equipamiento:</p>
          <div className="flex flex-wrap gap-2">
            {sala.equipos && sala.equipos.map((item) => (
              <span 
                key={item.id} 
                className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs border border-gray-200"
              >
                {getIcon(item.nombre)}
                {item.nombre}
              </span>
            ))}
          </div>
        </div>

        <button 
        onClick={() => navigate(`/sala/${sala.id}`)}
        className="w-full bg-[#1a3680] text-white py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
      >
        Ver Detalles y Reservar
      </button>
      </div>
    </div>
  );
};

export default SalaCard;