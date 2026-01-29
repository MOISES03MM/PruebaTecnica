import React from 'react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

const TarjetaReserva = ({ reserva }) => {
  const formatearFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatearHora = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-50 p-3 rounded-xl">
          <Calendar className="text-[#1e3a8a]" size={24} />
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
          Confirmada
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">
          Reserva #{reserva.id}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin size={16} />
          <span className="font-medium">Sala ID: {reserva.salaId}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock size={16} />
          <span>
            {formatearFecha(reserva.horaInicio)} <br />
            <span className="font-bold text-gray-900">
              {formatearHora(reserva.horaInicio)} - {formatearHora(reserva.horaFin)}
            </span>
          </span>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase font-bold mb-1">Propósito</p>
          <p className="text-sm text-gray-700 italic">
            "{reserva.proposito || 'Sin descripción'}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaReserva;