package com.proyecto.sistema_de_reserva.Reserva.domain.port.out;

import java.util.List;
import java.util.Optional;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;

public interface ReservaRepositorio {
    Reserva guardar(Reserva reserva);

    List<Reserva> ObtenerTodas();

    Optional<Reserva> obtenerPorId(Long id);

    List<Reserva> obtenerPorUsuarioId(Long usuarioId);
}
