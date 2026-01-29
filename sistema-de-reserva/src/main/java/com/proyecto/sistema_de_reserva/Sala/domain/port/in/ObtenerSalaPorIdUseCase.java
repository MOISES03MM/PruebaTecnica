package com.proyecto.sistema_de_reserva.Sala.domain.port.in;

import com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.in.web.ResponseSalaDTO;

public interface ObtenerSalaPorIdUseCase {

    ResponseSalaDTO obtenerPorId(Long salaId);
}