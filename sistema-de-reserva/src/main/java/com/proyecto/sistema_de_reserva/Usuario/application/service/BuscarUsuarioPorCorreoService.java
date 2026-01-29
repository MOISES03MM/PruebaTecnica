package com.proyecto.sistema_de_reserva.Usuario.application.service;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.BuscarUsuarioPorCorreoUseCase;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.UsuarioRepositorio;

@Service
public class BuscarUsuarioPorCorreoService implements BuscarUsuarioPorCorreoUseCase {

    private final UsuarioRepositorio usuarioRepositorio;

    public BuscarUsuarioPorCorreoService(UsuarioRepositorio usuarioRepositorio) {
        this.usuarioRepositorio = usuarioRepositorio;
    }

    @Override
    public Usuario buscarPorCorreo(String correo) {
        return usuarioRepositorio.buscarPorCorreo(correo)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}
