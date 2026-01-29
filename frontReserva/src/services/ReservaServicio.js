const API_URL = 'http://localhost:8080';

const ReservaService = {

  crearReserva: async (datosReserva, token) => {
    const response = await fetch(`${API_URL}/reservas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datosReserva),
    });

    let data = null;
    if (response.headers.get("content-type")?.includes("application/json")) {
      data = await response.json();
    }

    if (!response.ok) {
      throw new Error(data?.mensaje || 'Error al crear la reserva');
    }

    return data;
  },

  obtenerMisReservas: async (token) => {
    const response = await fetch(`${API_URL}/reservas`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('No se pudieron obtener tus reservas');
    return await response.json();
  },

  obtenerTodas: async (token) => {
    try {
      const response = await fetch(`${API_URL}/reservas`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.mensaje || 'Error al obtener todas las reservas');
      }

      return await response.json();
    } catch (error) {
      console.error("Error en ReservaService.obtenerTodas:", error);
      throw error;
    }
  }

};

export default ReservaService;
