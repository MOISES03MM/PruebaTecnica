package com.proyecto.sistema_de_reserva.Sala.application.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;
import com.proyecto.sistema_de_reserva.Sala.domain.port.in.ObtenerSalasUseCase;
import com.proyecto.sistema_de_reserva.Sala.domain.port.out.SalaRepositorio;

@Service
public class ObtenerSalasService implements ObtenerSalasUseCase {

    private final SalaRepositorio salaRepositorio;

    public ObtenerSalasService(SalaRepositorio salaRepositorio) {
        this.salaRepositorio = salaRepositorio;
    }

    @Override
    public List<Sala> ejecutar() {
        return salaRepositorio.obtenerTodas();
    }
}