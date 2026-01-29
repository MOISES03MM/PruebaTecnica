import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearSala } from '../services/SalaServicio';

const FormularioNuevaSala = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    capacidad: 4,
    ubicacion: '',
    imagenUrl: '',
    equiposSeleccionados: []
  });


  const opcionesEquipamiento = [
    { id: 1, nombre: "Pantalla" },
    { id: 2, nombre: "Proyector" },
    { id: 3, nombre: "Equipo de Videollamada" },
    { id: 4, nombre: "Pizarra" },
    { id: 5, nombre: "Sistema de Audio" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (id) => {
    setFormData(prev => {
      const exists = prev.equiposSeleccionados.includes(id);
      if (exists) {
        return { 
          ...prev, 
          equiposSeleccionados: prev.equiposSeleccionados.filter(item => item !== id) 
        };
      } else {
        return { 
          ...prev, 
          equiposSeleccionados: [...prev.equiposSeleccionados, id] 
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const datosParaEnviar = {
      nombre: formData.nombre,
      capacidad: parseInt(formData.capacidad),
      ubicacion: formData.ubicacion,
      equipoId: formData.equiposSeleccionados 
    };

    try {
      await crearSala(datosParaEnviar);
      navigate('/salas');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">Nombre de la Sala *</label>
          <input 
            type="text" 
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Sala Ejecutiva A"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Capacidad (personas) *</label>
            <input 
              type="number" 
              name="capacidad"
              required
              min="1"
              value={formData.capacidad}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Ubicación *</label>
            <input 
              type="text" 
              name="ubicacion"
              required
              value={formData.ubicacion}
              onChange={handleChange}
              placeholder="Ej: Piso 3, Ala Norte"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">URL de Imagen (opcional)</label>
          <input 
            type="text" 
            name="imagenUrl"
            value={formData.imagenUrl}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-3">Equipamiento Disponible</label>
          <div className="space-y-2">
            {opcionesEquipamiento.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group text-gray-700">
                <input 
                  type="checkbox"
                  checked={formData.equiposSeleccionados.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900 cursor-pointer"
                />
                <span className="text-sm font-medium group-hover:text-gray-900 transition-colors">
                  {item.nombre}
                </span>
              </label>
            ))}
          </div>
        </div>
        <button 
          type="submit"
          className="w-full bg-[#1a3680] text-white py-3 rounded-lg font-bold hover:bg-[#152a66] transition-all transform active:scale-[0.98] shadow-md mt-4"
        >
          Crear Sala
        </button>
      </form>
    </div>
  );
};

export default FormularioNuevaSala;