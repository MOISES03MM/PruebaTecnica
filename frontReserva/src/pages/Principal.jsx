import React, { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioProvider';
import { Building2, Clock, CheckCircle2, XCircle } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import AccionesRapidas from '../components/AccionesRapidas';
import ProximasReservas from '../components/ProximasReservas';

const Principal = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div className="min-h-screen bg-gray-50 px-60">
      
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Bienvenido, {usuario?.nombre || 'Usuario'}
        </h1>
        <p className="text-gray-500 font-medium">Departamento de Tecnología</p>
      </header>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard 
          titulo="Salas Disponibles" 
          valor="6" 
          subtitulo="Total de salas" 
          Icono={Building2} 
          colorIcono="text-gray-400" 
        />
        <StatsCard 
          titulo="Pendientes" 
          valor="0" 
          subtitulo="Esperando aprobación" 
          Icono={Clock} 
          colorIcono="text-amber-500" 
        />
        <StatsCard 
          titulo="Aprobadas" 
          valor="0" 
          subtitulo="Reservas confirmadas" 
          Icono={CheckCircle2} 
          colorIcono="text-green-500" 
        />
        <StatsCard 
          titulo="Rechazadas" 
          valor="0" 
          subtitulo="No aprobadas" 
          Icono={XCircle} 
          colorIcono="text-red-500" 
        />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-full">
          <AccionesRapidas />
        </div>
        <div className="h-full">
          <ProximasReservas />
        </div>
      </div>
    </div>
  );
};

export default Principal;