import React, { createContext, useState, useEffect, useContext } from 'react';


export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [usuario, setUsuario] = useState(null);

   
    useEffect(() => {
        const tokenGuardado = localStorage.getItem('token_reserva');
        if (tokenGuardado) {
            setToken(tokenGuardado);
           
        }
    }, []);

   
    const guardarSesion = (nuevoToken, datosUsuario) => {
        localStorage.setItem('token_reserva', nuevoToken);
        setToken(nuevoToken);
        setUsuario(datosUsuario);
    };

    
    const cerrarSesion = () => {
        localStorage.removeItem('token_reserva');
        setToken(null);
        setUsuario(null);
    };

    const isAdmin = usuario?.rol?.nombre === 'ADMIN';

    return (
        <UsuarioContext.Provider value={{ token, usuario, guardarSesion, cerrarSesion, isAdmin }}>
            {children}
        </UsuarioContext.Provider>
    );
};



export default UsuarioProvider;