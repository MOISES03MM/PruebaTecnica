const API_URL = 'http://localhost:8080/sala';

export const getSalaPorId = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error('No se pudo obtener el detalle');
    return await response.json();
  } catch (error) {
    console.error("Error en getSalaPorId:", error);
    return null;
  }
};




export const crearSala = async (datosParaEnviar) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(datosParaEnviar),
    });

    if (!response.ok) {
      throw new Error('Error al crear la sala en el servidor');
    }

    return await response.json();
  } catch (error) {
    console.error("Error en el servicio crearSala:", error);
    throw error;
  }
};