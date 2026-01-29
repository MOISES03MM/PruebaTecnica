package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.AutenticacionLoginUseCase;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.CrearUsuarioUseCase;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.LoginUseCase;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.UsuarioRepositorio;
import com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web.dto.LoginRequestDTO;
import com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web.dto.LoginResponseDTO;
import com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web.dto.RequestDTO;
import com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web.dto.ResponseDTO;

@RequestMapping("/usuario")
@RestController
public class UsuarioControlador {
    private final AutenticacionLoginUseCase autenticacionLoginUseCase;
    private final CrearUsuarioUseCase crearUsuarioUseCase;
    private final LoginUseCase loginUseCase;
    private final UsuarioRepositorio usuarioRepositorio;

    public UsuarioControlador(AutenticacionLoginUseCase autenticacionLoginUseCase,
            CrearUsuarioUseCase crearUsuarioUseCase, LoginUseCase loginUseCase,
            UsuarioRepositorio usuarioRepositorio) {
        this.autenticacionLoginUseCase = autenticacionLoginUseCase;
        this.crearUsuarioUseCase = crearUsuarioUseCase;
        this.loginUseCase = loginUseCase;
        this.usuarioRepositorio = usuarioRepositorio;
    }

    @PostMapping
    public ResponseEntity<ResponseDTO> crearUsuario(@RequestBody RequestDTO dto) {
        Usuario usuario = new Usuario(dto.getNombreCompleto(), dto.getCorreo(), dto.getContrasena(), dto.getRol());
        usuario = crearUsuarioUseCase.crearCuenta(usuario);
        ResponseDTO respuesta = new ResponseDTO(usuario.getNombreCompleto(), usuario.getCorreo());

        return ResponseEntity.ok(respuesta);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginDTO) {
        Usuario usuario = usuarioRepositorio.buscarPorCorreo(loginDTO.getCorreo()).orElse(null);

        if (usuario == null) {
            throw new Error("el usuario no existe");
        }
        String token = loginUseCase.login(loginDTO.getCorreo(), loginDTO.getContrasena());

        LoginResponseDTO respuesta = new LoginResponseDTO(token, usuario.getNombreCompleto(), usuario.getCorreo(),
                usuario.getRol());

        return ResponseEntity.ok(respuesta);
    }

}
