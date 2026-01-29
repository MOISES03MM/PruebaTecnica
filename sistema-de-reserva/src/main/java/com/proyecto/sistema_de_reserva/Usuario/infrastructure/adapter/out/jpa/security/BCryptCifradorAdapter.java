package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.CifrarContrasena;

@Component
public class BCryptCifradorAdapter implements CifrarContrasena {

    private final BCryptPasswordEncoder passwordEncoder;

    public BCryptCifradorAdapter() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @Override
    public String encriptar(String contrasena) {
        return passwordEncoder.encode(contrasena);
    }

    @Override
    public boolean verificar(String contrasena, String contrasenaEncriptada) {
        return passwordEncoder.matches(contrasena, contrasenaEncriptada);
    }

}
