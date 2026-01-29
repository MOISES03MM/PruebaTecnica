package com.proyecto.sistema_de_reserva.Sala.domain.port.out;

import java.util.List;
import java.util.Optional;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;

public interface SalaRepositorio {
    Sala obtenerPorNombre(String nombre);

    Sala crearSala(Sala sala);

    List<Sala> obtenerTodas();

    Optional<Sala> obtenerPorId(Long id);
}
