import React, { useEffect, useState, useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioProvider';
import ReservaService from '../services/ReservaServicio';
import TarjetaReserva from '../components/TarjetaReserva';
import { ChevronLeft, Loader2,Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaginaMisReservas = () => {
  const { token } = useContext(UsuarioContext);
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarReservas = async () => {
      if (!token) return;
      
      try {
        
        const data = await ReservaService.obtenerTodas(token);
        setReservas(data);
      } catch (error) {
        console.error("Error al cargar reservas:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarReservas();
  }, [token]);

  if (cargando) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <Loader2 className="animate-spin mb-4" size={48} />
        <p className="font-bold">Cargando tus reservas...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <button
              onClick={() => navigate('/inicio')}
              className="flex items-center gap-1 text-[#1e3a8a] font-bold mb-2 hover:underline"
            >
              <ChevronLeft size={20} /> Volver al Inicio
            </button>
            <h1 className="text-4xl font-black text-gray-900">Mis Reservas</h1>
            <p className="text-gray-500 font-medium">Gestiona y revisa tus horarios programados</p>
          </div>
          
          <div className="bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-gray-400 font-bold text-xs uppercase block">Total Reservas</span>
            <span className="text-2xl font-black text-[#1e3a8a]">{reservas.length}</span>
          </div>
        </div>

        {reservas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservas.map((reserva) => (
              <TarjetaReserva key={reserva.id} reserva={reserva} />
            ))}
          </div>
        ) : (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-[32px] p-20 text-center">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-gray-300" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No tienes reservas aún</h3>
            <p className="text-gray-500 mb-8">Parece que todavía no has programado ninguna sala.</p>
            <button 
              onClick={() => navigate('/sala')}
              className="bg-[#1e3a8a] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-all"
            >
              Explorar Salas Disponibles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginaMisReservas;