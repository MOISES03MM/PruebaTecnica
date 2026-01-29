package com.proyecto.sistema_de_reserva.Usuario.domain.port.out;

public interface CifrarContrasena {
    String encriptar(String contrasena);

    boolean verificar(String contrasena, String contrasenaEncriptada);
}
