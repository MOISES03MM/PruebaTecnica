package com.proyecto.sistema_de_reserva.Usuario.application.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.CrearUsuarioUseCase;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.CifrarContrasena;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.UsuarioRepositorio;

@Service
public class CrearUsuarioService implements CrearUsuarioUseCase {

    private final CifrarContrasena cifrarContrasena;
    private final UsuarioRepositorio usuarioRepositorio;

    public CrearUsuarioService(CifrarContrasena cifrarContrasena, UsuarioRepositorio usuarioRepositorio) {
        this.cifrarContrasena = cifrarContrasena;
        this.usuarioRepositorio = usuarioRepositorio;
    }

    @Override
    public Usuario crearCuenta(Usuario usuario) {
        // verificar si ya existe ese usuario por correo
        Optional<Usuario> existeUsuario = usuarioRepositorio.buscarPorCorreo(usuario.getCorreo());

        if (existeUsuario.isPresent()) {
            throw new Error("el usuario ya existe");
        }

        String contrasenaEncriptada = cifrarContrasena.encriptar(usuario.getContrasena());
        usuario.setContrasena(contrasenaEncriptada);

        Usuario user = usuarioRepositorio.crearUsuario(usuario);

        return user;

    }

}
