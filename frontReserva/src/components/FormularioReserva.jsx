import React, { useState, useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioProvider';
import ReservaService from '../services/ReservaServicio';

const FormularioReserva = ({ salaId }) => {
  const { token } = useContext(UsuarioContext);

  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [proposito, setProposito] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMensaje('Debes iniciar sesión para reservar');
      return;
    }

    try {
      const reserva = {
        salaId,
        horaInicio: `${fecha}T${horaInicio}`,
        horaFin: `${fecha}T${horaFin}`,
        proposito,
      };

      await ReservaService.crearReserva(reserva, token);

      setMensaje('✅ Reserva creada con éxito');
      setFecha('');
      setHoraInicio('');
      setHoraFin('');
      setProposito('');
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Reservar Sala</h2>
      <p className="text-sm text-gray-500 mb-6 font-medium">
        Completa el formulario para solicitar una reserva
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
            Fecha *
          </label>
          <input
            type="date"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-900 bg-gray-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Hora de Inicio *
            </label>
            <input
              type="time"
              required
              value={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-900 bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Hora de Fin *
            </label>
            <input
              type="time"
              required
              value={horaFin}
              onChange={(e) => setHoraFin(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-900 bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
            Propósito de la Reunión *
          </label>
          <textarea
            rows="4"
            required
            value={proposito}
            onChange={(e) => setProposito(e.target.value)}
            placeholder="Describe brevemente el propósito de la reunión..."
            className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-900 resize-none bg-gray-50 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-sm mt-2"
        >
          Solicitar Reserva
        </button>

        {mensaje && (
          <p className="text-sm text-center font-medium text-gray-700">
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormularioReserva;
