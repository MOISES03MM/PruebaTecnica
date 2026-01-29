package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web.dto;

import com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa.RolEntidad;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestDTO {
    private String nombreCompleto;
    private String correo;
    private String contrasena;
    private RolEntidad rol;
}
