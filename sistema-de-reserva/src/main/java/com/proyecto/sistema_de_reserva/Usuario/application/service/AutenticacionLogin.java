package com.proyecto.sistema_de_reserva.Usuario.application.service;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.AutenticacionLoginUseCase;

@Service
public class AutenticacionLogin implements AutenticacionLoginUseCase {

    @Override
    public Usuario login() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
