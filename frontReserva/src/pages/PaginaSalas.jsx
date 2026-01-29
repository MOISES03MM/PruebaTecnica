import React, { useState, useEffect, useContext } from 'react';
import { Plus } from 'lucide-react';
import SalaCard from '../components/SalaCard';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioProvider'; 

const PaginaSalas = () => {
  const [salas, setSalas] = useState([]);
  const [cargando, setCargando] = useState(true);
  

  const { token, isAdmin } = useContext(UsuarioContext);

  useEffect(() => {
    const obtenerSalas = async () => {
      try {
        const response = await fetch('http://localhost:8080/sala', {
          headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Error al conectar con el servidor');
        const data = await response.json();
        setSalas(data);
      } catch (error) {
        console.error("Error cargando salas:", error);
      } finally {
        setCargando(false);
      }
    };

    if (token) {
      obtenerSalas();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 px-10 md:px-20 lg:px-60 py-10">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Salas de Reuniones</h1>
          <p className="text-gray-500 font-medium">Explora y gestiona las salas disponibles</p>
        </div>
        

        {isAdmin && (
          <Link to='/new' className="bg-blue-900 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold hover:bg-blue-800 transition-shadow shadow-sm text-sm">
            <Plus size={18} />
            Nueva Sala
          </Link>
        )}
      </div>

      {cargando ? (
        <div className="text-center py-20 italic text-gray-400">Cargando salas desde el servidor...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salas.map((sala) => (
            <SalaCard key={sala.id} sala={sala} />
          ))}
        </div>
      )}

      {!cargando && salas.length === 0 && (
        <div className="text-center py-20 text-gray-500 font-medium">No se encontraron salas registradas.</div>
      )}
    </div>
  );
};

export default PaginaSalas;