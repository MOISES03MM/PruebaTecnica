import React, { useEffect, useState, useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioProvider';
import ReservaService from '../services/ReservaServicio';
import { Calendar, Clock, MapPin } from 'lucide-react';

const ProximasReservas = () => {
  const { token } = useContext(UsuarioContext);
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      if (!token) return;
      try {
        const data = await ReservaService.obtenerTodas(token);
        
        
        const ordenadas = data.sort((a, b) => new Date(a.horaInicio) - new Date(b.horaInicio));
        
        
        setReservas(ordenadas.slice(0, 5));
      } catch (error) {
        console.error("Error al cargar próximas reservas:", error);
      } finally {
        setCargando(false);
      }
    };
    cargarDatos();
  }, [token]);

  
  const formatearHora = (fechaStr) => {
    return new Date(fechaStr).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatearDia = (fechaStr) => {
    return new Date(fechaStr).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-bold text-gray-800">Próximas Reservas</h3>
      <p className="text-gray-500 text-sm mb-6">Tus reservas aprobadas más cercanas</p>
      
      <div className="flex-1 space-y-4">
        {cargando ? (
          <p className="text-center text-gray-400 animate-pulse mt-10">Cargando...</p>
        ) : reservas.length > 0 ? (
          reservas.map((res) => (
            <div 
              key={res.id} 
              className="flex items-center gap-4 p-3 rounded-lg border-l-4 border-blue-600 bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              
              <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-md min-w-[50px] py-1 shadow-sm">
                <span className="text-[10px] uppercase font-bold text-blue-600">
                  {new Date(res.horaInicio).toLocaleString('es-ES', { month: 'short' })}
                </span>
                <span className="text-lg font-black text-gray-800 leading-none">
                  {new Date(res.horaInicio).getDate()}
                </span>
              </div>

              
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 truncate">
                  {res.proposito || "Sin propósito definido"}
                </h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                    <Clock size={12} /> {formatearHora(res.horaInicio)} - {formatearHora(res.horaFin)}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                    <MapPin size={12} /> Sala {res.salaId}
                  </span>
                </div>
              </div>

             
              <div className="bg-green-100 p-1.5 rounded-full">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 italic text-sm">No tienes reservas próximas</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProximasReservas;