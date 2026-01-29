package com.proyecto.sistema_de_reserva.Reserva.domain.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reserva {
    private Long id;
    private Long usuarioId;
    private Long salaId;
    private LocalDateTime horaInicio;
    private LocalDateTime horaFin;
    private String proposito;
    private LocalDateTime createdAt;
}
