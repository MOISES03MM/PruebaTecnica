package com.proyecto.sistema_de_reserva.Usuario.domain.entity;

import com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa.RolEntidad;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    private Long id;
    private String nombreCompleto;
    private String correo;
    private String contrasena;
    private RolEntidad rol;

    public Usuario(String nombreCompleto, String correo, String contrasena, RolEntidad rol) {
        this.id = null;
        this.nombreCompleto = nombreCompleto;
        this.correo = correo;
        this.contrasena = contrasena;
        this.rol = rol;
    }

}
