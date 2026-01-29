package com.proyecto.sistema_de_reserva.Usuario.application.service;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.LoginUseCase;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.CifrarContrasena;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.GeneradorToken;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.UsuarioRepositorio;

@Service
public class LoginService implements LoginUseCase {
    private final UsuarioRepositorio usuarioRepositorio;
    private final CifrarContrasena cifrarContrasena;
    private final GeneradorToken generadorToken;

    public LoginService(UsuarioRepositorio usuarioRepositorio, CifrarContrasena cifrarContrasena,
            GeneradorToken generadorToken) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.cifrarContrasena = cifrarContrasena;
        this.generadorToken = generadorToken;
    }

    @Override
    public String login(String correo, String contrasena) {
        Usuario usuario = usuarioRepositorio.buscarPorCorreo(correo).orElse(null);

        // validar la contrasena

        if (!cifrarContrasena.verificar(contrasena, usuario.getContrasena())) {
            throw new Error("la contrasena es incorrecta");
        }

        return generadorToken.generarToken(usuario);
    }

}
