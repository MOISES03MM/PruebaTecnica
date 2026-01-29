package com.proyecto.sistema_de_reserva.Reserva.application.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.in.ObtenerReservasUseCase;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.out.ReservaRepositorio;

@Service
public class ObtenerReservasService implements ObtenerReservasUseCase {

    private final ReservaRepositorio reservaRepositorio;

    public ObtenerReservasService(ReservaRepositorio reservaRepositorio) {
        this.reservaRepositorio = reservaRepositorio;
    }

    @Override
    public List<Reserva> obtenerTodas() {
        return reservaRepositorio.ObtenerTodas();
    }

    @Override
    public Reserva obtenerPorId(Long id) {
        return reservaRepositorio.obtenerPorId(id)
                .orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
    }

    @Override
    public List<Reserva> obtenerPorUsuarioId(Long usuarioId) {
        return reservaRepositorio.obtenerPorUsuarioId(usuarioId);
    }

}
