package com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CrearReservaRequestDTO {
    private Long salaId;
    private LocalDateTime horaInicio;
    private LocalDateTime horaFin;
    private String proposito;
}
