package com.proyecto.sistema_de_reserva.Usuario.domain.port.out;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;

public interface GeneradorToken {
    String generarToken(Usuario usuario);

    // Añadimos estos para el Filtro:
    boolean esTokenValido(String token);

    String obtenerCorreoDeToken(String token);

    String obtenerRolDeToken(String token);
}
