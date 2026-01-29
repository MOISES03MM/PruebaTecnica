package com.proyecto.sistema_de_reserva.Reserva.application.service;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.in.CrearReservaUseCase;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.out.ReservaRepositorio;

@Service
public class CrearReservaService implements CrearReservaUseCase {

    private final ReservaRepositorio reservaRepositorio;

    public CrearReservaService(ReservaRepositorio reservaRepositorio) {
        this.reservaRepositorio = reservaRepositorio;
    }

    @Override
    public Reserva crear(Reserva reserva) {
        return reservaRepositorio.guardar(reserva);
    }

}
