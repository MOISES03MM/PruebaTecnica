package com.proyecto.sistema_de_reserva.Sala.domain.port.in;

import java.util.List;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;

public interface ObtenerSalasUseCase {
    List<Sala> ejecutar();
}