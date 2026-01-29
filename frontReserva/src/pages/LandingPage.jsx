import React from 'react'
import Navbar from '../components/Navbar'
import { Calendar, CheckCircle2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
    
    
    

     <section className="max-w-7xl mx-auto text-center pt-20 pb-10 px-6">
        <h1 className="text-[50px] font-black font-serif text-gray-900 leading-[1.1] tracking-tight mb-8">
          Gestiona las Reservas <br /> de Salas de Reuniones
        </h1>
        
        <p className="text-[20px] text-gray-500 font-medium max-w-3xl mx-auto mb-5 leading-relaxed">
          Sistema completo para solicitar, aprobar y gestionar reservas de espacios de reunión en tu empresa
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link 
            to="/registro" 
            className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
          >
            Comenzar Ahora
          </Link>
          
          <Link 
            to="/login" 
            className="bg-white text-gray-700 border-2 border-gray-100 px-10 py-4 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all active:scale-95"
          >
            Iniciar Sesión
          </Link>
        </div>
      </section>

      <section className="max-w-full  mx-auto px-60 py-20 grid grid-cols-1 md:grid-cols-3 gap-20  ">
        
        <div className="bg-white h-40 p-2 w-96  rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
          <Calendar className="text-[#1e3a8a] mb-2" size={36} />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Reservas Fáciles</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            Solicita reservas de salas de manera rápida y sencilla con nuestro calendario intuitivo.
          </p>
        </div>

        <div className="bg-white h-40 p-2 w-96 rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
          <CheckCircle2 className="text-[#1e3a8a] mb-6" size={36} />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Aprobación Coordinada</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            Los coordinadores pueden revisar y aprobar solicitudes de manera eficiente.
          </p>
        </div>

        <div className="bg-white h-40 p-2rounded-2xl w-96 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
          <Users className="text-[#1e3a8a] mb-6" size={36} />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Completa</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            Administra usuarios, salas y reportes desde un panel centralizado.
          </p>
        </div>
      </section>

      <section className="max-w-full px-60 mx-auto  pb-32 pt-20">
        <div className="bg-[#1e3a8a] rounded-xl py-10 pb-20 text-center text-white shadow-2xl shadow-blue-900/30">
          <h2 className="text-[30px] font-bold mb-6">¿Listo para optimizar tus reservas?</h2>
          <p className="text-blue-100 text-[18px] mb-7 font-medium">
            Únete a empresas que ya están usando nuestro sistema
          </p>
          <button className="bg-white text-gray-900 px-10 py-2 rounded-xl  text-md hover:bg-gray-100 transition-transform active:scale-95 shadow-lg">
            Crear Cuenta Gratis
          </button>
        </div>
      </section>

      <footer className="w-full bg-white border-t border-gray-300  mt-20 py-10">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-500 font-semibold text-sm">
            © 2026 Sistema de Reservas. Todos los derechos reservados.
          </p>
          
        </div>
      </footer>
      </>
  )
}

export default LandingPage