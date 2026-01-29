package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.UsuarioRepositorio;

@Repository
public class UsuarioReposotorioImpl implements UsuarioRepositorio {
    private final UsuarioJpaRepositorio usuarioJpaRepositorio;
    private final JpaRolRepositorio rolJpaRepositorio;

    public UsuarioReposotorioImpl(UsuarioJpaRepositorio usuarioJpaRepositorio, JpaRolRepositorio rolJpaRepositorio) {
        this.usuarioJpaRepositorio = usuarioJpaRepositorio;
        this.rolJpaRepositorio = rolJpaRepositorio;
    }

    @Override
    public Optional<Usuario> buscarPorNombre(String nombreUsuario) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public Optional<Usuario> buscarPorCorreo(String correo) {
        return usuarioJpaRepositorio.findByCorreo(correo)
                .map(UsuarioMapper::toDomain);
    }

    @Override
    public Usuario crearUsuario(Usuario usuario) {

        UsuarioEntidad entidad = UsuarioMapper.toEntity(usuario);

        if (entidad.getRol() != null && entidad.getRol().getId() != null) {
            RolEntidad rolExistente = rolJpaRepositorio.findById(entidad.getRol().getId())
                    .orElseThrow(() -> new RuntimeException("Error: El rol indicado no existe en la base de datos"));
            entidad.setRol(rolExistente);
        }

        entidad = usuarioJpaRepositorio.save(entidad);

        return UsuarioMapper.toDomain(entidad);
    }
}
