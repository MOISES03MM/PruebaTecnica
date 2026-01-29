package com.proyecto.sistema_de_reserva.Sala.application.service;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;
import com.proyecto.sistema_de_reserva.Sala.domain.port.in.ObtenerSalaPorIdUseCase;
import com.proyecto.sistema_de_reserva.Sala.domain.port.out.SalaRepositorio;
import com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.in.web.ResponseSalaDTO;

import lombok.RequiredArgsConstructor;

@Service
public class ObtenerSalaPorIdService implements ObtenerSalaPorIdUseCase {

    private final SalaRepositorio salaRepositorio;

    public ObtenerSalaPorIdService(SalaRepositorio salaRepositorio) {
        this.salaRepositorio = salaRepositorio;
    }

    @Override
    public ResponseSalaDTO obtenerPorId(Long id) {

        Sala sala = salaRepositorio.obtenerPorId(id)
                .orElseThrow(() -> new RuntimeException("Sala no encontrada"));

        return new ResponseSalaDTO(
                sala.getId(),
                sala.getNombre(),
                sala.getCapacidad(),
                sala.getUbicacion(),
                sala.getEquipo());
    }
}