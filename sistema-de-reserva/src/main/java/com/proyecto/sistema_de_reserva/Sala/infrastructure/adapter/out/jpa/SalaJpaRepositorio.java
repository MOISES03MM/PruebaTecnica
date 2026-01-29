package com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.out.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaJpaRepositorio extends JpaRepository<SalaEntidad, Long> {
    SalaEntidad findByNombre(String nombre);
}
