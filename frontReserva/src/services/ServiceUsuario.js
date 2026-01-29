const API_URL = "http://localhost:8080";

const ServiceUsuario = {
  crearUsuario: async (datosUsuario) => {
    try {
      const response = await fetch(`${API_URL}/usuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosUsuario),
      });

      let data = null;

      if (response.headers.get("content-type")?.includes("application/json")) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.mensaje || "Error al registrar el usuario");
      }

      return data;
    } catch (error) {
      console.error("Error en ServiceUsuario:", error.message);
      throw error.message;
    }
  },

  login: async (credenciales) => {
    try {
      const response = await fetch(`${API_URL}/usuario/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || "Credenciales inválidas");
      }

      return data;
    } catch (error) {
      throw error.message;
    }
  },
};

export default ServiceUsuario;
