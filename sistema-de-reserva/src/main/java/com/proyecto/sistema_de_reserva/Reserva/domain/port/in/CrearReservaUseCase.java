package com.proyecto.sistema_de_reserva.Reserva.domain.port.in;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;

public interface CrearReservaUseCase {
    Reserva crear(Reserva reserva);
}
