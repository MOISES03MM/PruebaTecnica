package com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.out.jpa;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;
import com.proyecto.sistema_de_reserva.Sala.domain.port.out.SalaRepositorio;

@Repository
public class RepositorioImpl implements SalaRepositorio {
    private final SalaJpaRepositorio jpaRepositorio;

    public RepositorioImpl(SalaJpaRepositorio jpaRepositorio) {
        this.jpaRepositorio = jpaRepositorio;
    }

    @Override
    public Sala obtenerPorNombre(String nombre) {

        SalaEntidad entidad = jpaRepositorio.findByNombre(nombre);

        if (entidad == null) {
            return null;
        }
        // mapear la a Sala
        Sala sala = SalaMapper.toDomain(entidad);
        return sala;

    }

    @Override
    public Sala crearSala(Sala sala) {
        SalaEntidad entidad = SalaMapper.toEntity(sala);

        SalaEntidad entidadCreada = jpaRepositorio.save(entidad);

        return SalaMapper.toDomain(entidadCreada);

    }

    @Override
    public List<Sala> obtenerTodas() {
        List<SalaEntidad> entidades = jpaRepositorio.findAll();
        return entidades.stream()
                .map(SalaMapper::toDomain)
                .toList();
    }

    @Override
    public Optional<Sala> obtenerPorId(Long id) {
        return jpaRepositorio.findById(id)
                .map(SalaMapper::toDomain);
    }
}
