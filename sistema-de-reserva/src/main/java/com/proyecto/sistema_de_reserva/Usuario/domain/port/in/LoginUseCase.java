package com.proyecto.sistema_de_reserva.Usuario.domain.port.in;

public interface LoginUseCase {
    String login(String correo, String contrasena);
}
