package com.proyecto.sistema_de_reserva.Sala.application.service;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;
import com.proyecto.sistema_de_reserva.Sala.domain.port.in.CrearSalaUseCase;
import com.proyecto.sistema_de_reserva.Sala.domain.port.out.SalaRepositorio;

@Service
public class CrearSalaService implements CrearSalaUseCase {

    private final SalaRepositorio salaRepositorio;

    public CrearSalaService(SalaRepositorio salaRepositorio) {
        this.salaRepositorio = salaRepositorio;
    }

    @Override
    public Sala crearSala(Sala sala) {
        Sala salaEncontrada = salaRepositorio.obtenerPorNombre(sala.getNombre());
        if (salaEncontrada != null) {
            throw new Error("Ya existe una sala con ese nombre");
        }

        return salaRepositorio.crearSala(sala);
    }

}
