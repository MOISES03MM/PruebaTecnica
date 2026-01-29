package com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.out.jpa;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.out.ReservaRepositorio;
import com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web.ReservaEntidad;

@Repository
public class ReservaJpaImp implements ReservaRepositorio {
    private final ReservaJpaRepositorio reservaJpaRepositorio;

    public ReservaJpaImp(ReservaJpaRepositorio reservaJpaRepositorio) {
        this.reservaJpaRepositorio = reservaJpaRepositorio;
    }

    @Override
    public Reserva guardar(Reserva reserva) {
        ReservaEntidad entidad = ReservaMapper.toEntity(reserva);
        ReservaEntidad guardado = reservaJpaRepositorio.save(entidad);
        return ReservaMapper.toDomain(guardado);
    }

    @Override
    public List<Reserva> ObtenerTodas() {
        return reservaJpaRepositorio.findAll()
                .stream()
                .map(ReservaMapper::toDomain)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Reserva> obtenerPorId(Long id) {
        return reservaJpaRepositorio.findById(id)
                .map(ReservaMapper::toDomain);
    }

    @Override
    public List<Reserva> obtenerPorUsuarioId(Long usuarioId) {
        return reservaJpaRepositorio.findByUsuarioId(usuarioId)
                .stream()
                .map(ReservaMapper::toDomain)
                .collect(Collectors.toList());
    }

}
