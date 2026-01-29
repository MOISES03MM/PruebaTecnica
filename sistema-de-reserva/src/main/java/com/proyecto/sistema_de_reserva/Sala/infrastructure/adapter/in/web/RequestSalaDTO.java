package com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.in.web;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestSalaDTO {
    private String nombre;
    private Integer capacidad;
    private String ubicacion;
    private List<Long> equipoId;
}
