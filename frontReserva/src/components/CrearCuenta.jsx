import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {Building2,User,Mail,Lock,UserCog,Eye,EyeOff} from "lucide-react";
import ServiceUsuario from "../services/ServiceUsuario";
import { UsuarioContext } from "../context/UsuarioProvider";
const Register = () => {
  const { guardarSesion } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correo: "",
    contrasena: "",
    rol: "2",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      nombreCompleto: formData.nombreCompleto,
      correo: formData.correo,
      contrasena: formData.contrasena,
      rol: {
        id: parseInt(formData.rol),
      },
    };
    console.log("Enviando datos:", datos);

    const resultado = await ServiceUsuario.crearUsuario(datos);
    console.log("Usuario creado:", resultado);

    const loginDatos = {
      correo: formData.correo,
      contrasena: formData.contrasena,
    };
    const resultadoLogin = await ServiceUsuario.login(loginDatos);
    if (resultadoLogin && resultadoLogin.token) {
      guardarSesion(resultadoLogin.token, {
        nombre: resultadoLogin.nombreCompleto,
        correo: resultadoLogin.correo,
        rol: resultadoLogin.rol,
      });

      navigate("/inicio");
    }
  };

  const roles = [
    { value: 3, label: "Administrador" },
    { value: 1, label: "Usuario (Solicitante)" },
    { value: 2, label: "Coordinador (Aprobador)" },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-6 font-sans">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] shadow-2xl p-10 flex flex-col items-center">
        {/* Encabezado */}
        <div className="flex items-center gap-5 w-full mb-8">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <Building2 className="text-[#1e3a8a]" size={40} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Crear Cuenta
            </h2>
            <p className="text-gray-500 font-medium leading-tight">
              Regístrate para gestionar <br /> tus reservas de salas
            </p>
          </div>
        </div>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 font-bold text-[14px] ml-1">
              Nombre Completo
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                type="text"
                placeholder="Ej. Juan Pérez"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-12 pr-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 font-bold text-[14px] ml-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                type="email"
                placeholder="correo@empresa.com"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-12 pr-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 font-bold text-[14px] ml-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Mínimo 8 caracteres"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-12 pr-12 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] outline-none transition-all font-medium"
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

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 font-bold text-[14px] ml-1">
              Tipo de Usuario (Rol)
            </label>
            <div className="relative">
              <UserCog
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-12 pr-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] outline-none appearance-none transition-all font-medium text-gray-700 cursor-pointer"
              >
                <option value="" disabled selected>
                  Selecciona un rol
                </option>
                {roles.map((rol) => (
                  <option key={rol.value} value={rol.value}>
                    {rol.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-blue-900/20 hover:bg-blue-900 transition-all active:scale-95 mt-4"
          >
            Registrar Cuenta
          </button>
        </form>

        <p className="mt-8 text-gray-500 font-medium text-[15px]">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-[#1e3a8a] font-black hover:underline"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
