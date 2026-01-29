import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Importa useNavigate
import { Building2, Info, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import ServiceUsuario from '../services/ServiceUsuario';
import { UsuarioContext } from '../context/UsuarioProvider';

const Login = () => {
  const { guardarSesion } = useContext(UsuarioContext);
  const navigate = useNavigate(); 
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const datos = {
        correo: formData.correo,
        contrasena: formData.contrasena
      };

      const resultado = await ServiceUsuario.login(datos);

      if (resultado && resultado.token) {
        guardarSesion(resultado.token, {
          nombre: resultado.nombreCompleto,
          correo: resultado.correo, 
          rol: resultado.rol
        });
        navigate("/inicio");
      }
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-6 font-sans">
      <div className="bg-white w-full max-w-[450px] rounded-[32px] shadow-2xl p-10 flex flex-col items-center">
        
        <div className="flex items-center gap-5 w-full mb-8">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <Building2 className="text-[#1e3a8a]" size={40} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Iniciar Sesión</h2>
            <p className="text-gray-500 font-medium leading-tight">
              Ingresa tus credenciales para acceder
            </p>
          </div>
        </div>

        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-[15px] ml-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                name='correo'
                value={formData.correo}
                onChange={handleChange}
                type="email" 
                required
                placeholder="tu@empresa.com"
                className="w-full bg-gray-50 border border-gray-200 py-3.5 pl-12 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-bold text-[15px] ml-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                name='contrasena'
                value={formData.contrasena}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 py-3.5 pl-12 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] transition-all font-medium"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-blue-900 transition-all active:scale-95"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-8 text-gray-500 font-medium text-[15px]">
          ¿No tienes una cuenta? {' '}
          <Link to="/registro" className="text-[#1e3a8a] font-black hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;