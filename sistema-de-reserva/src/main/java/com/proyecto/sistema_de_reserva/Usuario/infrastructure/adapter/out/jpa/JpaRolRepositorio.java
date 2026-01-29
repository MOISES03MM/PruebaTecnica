package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaRolRepositorio extends JpaRepository<RolEntidad, Long> {

}