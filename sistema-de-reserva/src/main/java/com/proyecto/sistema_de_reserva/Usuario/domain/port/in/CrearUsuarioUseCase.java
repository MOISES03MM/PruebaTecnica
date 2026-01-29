package com.proyecto.sistema_de_reserva.Usuario.domain.port.in;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;

public interface CrearUsuarioUseCase {
    Usuario crearCuenta(Usuario usuario);
}
