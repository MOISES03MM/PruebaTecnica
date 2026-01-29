package com.proyecto.sistema_de_reserva.Reserva.domain.port.in;

import java.util.List;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;

public interface ObtenerReservasUseCase {
    List<Reserva> obtenerTodas();

    Reserva obtenerPorId(Long id);

    List<Reserva> obtenerPorUsuarioId(Long usuarioId);
}
