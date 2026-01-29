package com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.out.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web.ReservaEntidad;

public interface ReservaJpaRepositorio extends JpaRepository<ReservaEntidad, Long> {
    List<ReservaEntidad> findByUsuarioId(Long usuarioId);
}
