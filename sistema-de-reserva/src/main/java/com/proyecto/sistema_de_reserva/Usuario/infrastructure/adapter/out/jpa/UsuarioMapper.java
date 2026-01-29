package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;

public class UsuarioMapper {
    public static Usuario toDomain(UsuarioEntidad entidad) {
        Usuario usuario = new Usuario();
        usuario.setId(entidad.getId_usuario());
        usuario.setNombreCompleto(entidad.getNombreCompleto());
        usuario.setCorreo(entidad.getCorreo());
        usuario.setContrasena(entidad.getContrasenia());

        if (entidad.getRol() != null) {
            RolEntidad rol = new RolEntidad();
            rol.setId(entidad.getRol().getId());
            rol.setNombre(entidad.getRol().getNombre());
            usuario.setRol(rol);
        }

        return usuario;
    }

    public static UsuarioEntidad toEntity(Usuario usuario) {
        UsuarioEntidad entidad = new UsuarioEntidad();

        entidad.setNombreCompleto(usuario.getNombreCompleto());
        entidad.setCorreo(usuario.getCorreo());
        entidad.setContrasenia(usuario.getContrasena());
        entidad.setRol(usuario.getRol());

        return entidad;
    }
}
