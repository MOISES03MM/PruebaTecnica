import React, { useState, useEffect, useContext } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';
import DetalleSalaInfo from '../components/DetalleSalaInfo';
import FormularioReserva from '../components/FormularioReserva';
import { UsuarioContext } from '../context/UsuarioProvider';

const PaginaReservarSala = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(UsuarioContext); 
  
  const [sala, setSala] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`http://localhost:8080/sala/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('No autorizado');
        return res.json();
      })
      .then(data => setSala(data))
      .catch(err => {
        console.error('Error al obtener detalle:', err);
        setError(true);
      });
  }, [id, token]); 

  if (!token) {
    return (
      <div className="p-20 text-center text-gray-500 font-bold">
        Por favor, inicia sesión para acceder a esta sala.
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-20 text-center text-red-500 font-bold">
        Hubo un error al cargar la sala o tu sesión ha expirado.
      </div>
    );
  }

  if (!sala) {
    return (
      <div className="p-20 text-center text-gray-500 font-bold italic">
        Cargando detalles de la sala...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-left">
          Reservar Sala: {sala.nombre}
        </h1>

        <button
          onClick={() => navigate('/sala')}
          className="flex items-center gap-1 text-gray-800 hover:text-blue-900 font-bold mb-8"
        >
          <ChevronLeft size={20} />
          Volver a Salas
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <DetalleSalaInfo sala={sala} />

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={20} className="text-gray-400" />
                <h3 className="font-bold text-gray-900">Próximas Reservas</h3>
              </div>
              <div className="py-12 text-center text-gray-400 border-2 border-dashed rounded-lg">
                No hay reservas confirmadas para esta sala.
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-12">
            <FormularioReserva salaId={sala.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaReservarSala;