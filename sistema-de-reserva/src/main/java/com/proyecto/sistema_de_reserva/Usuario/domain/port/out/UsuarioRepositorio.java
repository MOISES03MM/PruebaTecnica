package com.proyecto.sistema_de_reserva.Usuario.domain.port.out;

import java.util.Optional;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;

public interface UsuarioRepositorio {
    Optional<Usuario> buscarPorNombre(String nombreUsuario);

    Optional<Usuario> buscarPorCorreo(String correo);

    Usuario crearUsuario(Usuario usuario);

}
