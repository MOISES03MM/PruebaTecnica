package com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.out.jpa;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;
import com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web.ReservaEntidad;

public class ReservaMapper {
    public static ReservaEntidad toEntity(Reserva r) {
        ReservaEntidad e = new ReservaEntidad();

        e.setId(r.getId());

        e.setUsuarioId(r.getUsuarioId());
        e.setSalaId(r.getSalaId());
        e.setHoraInicio(r.getHoraInicio());
        e.setHoraFin(r.getHoraFin());
        e.setProposito(r.getProposito());
        e.setCreatedAt(r.getCreatedAt());

        return e;
    }

    public static Reserva toDomain(ReservaEntidad e) {
        Reserva r = new Reserva();

        r.setId(e.getId());
        r.setUsuarioId(e.getUsuarioId());
        r.setSalaId(e.getSalaId());
        r.setHoraInicio(e.getHoraInicio());
        r.setHoraFin(e.getHoraFin());
        r.setProposito(e.getProposito());
        r.setCreatedAt(e.getCreatedAt());

        return r;
    }
}

/**
 * private Long id;
 * private Long usuarioId;
 * private Long salaId;
 * private LocalDateTime horaInicio;
 * private LocalDateTime horaFin;
 * private String proposito;
 * private LocalDateTime createdAt;
 */
