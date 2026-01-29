package com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.sistema_de_reserva.Reserva.domain.entity.Reserva;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.in.CrearReservaUseCase;
import com.proyecto.sistema_de_reserva.Reserva.domain.port.in.ObtenerReservasUseCase;
import com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web.dto.CrearReservaRequestDTO;
import com.proyecto.sistema_de_reserva.Reserva.infrastructure.adapter.in.web.dto.ReservaResponseDTO;
import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.in.BuscarUsuarioPorCorreoUseCase;

@RestController
@RequestMapping("/reservas")
public class ReservaController {

    private final CrearReservaUseCase crearReservaUseCase;
    private final ObtenerReservasUseCase obtenerReservasUseCase;
    private final BuscarUsuarioPorCorreoUseCase buscarUsuarioPorCorreoUseCase;

    public ReservaController(CrearReservaUseCase crearReservaUseCase, ObtenerReservasUseCase obtenerReservasUseCase,
            BuscarUsuarioPorCorreoUseCase buscarUsuarioPorCorreoUseCase) {
        this.crearReservaUseCase = crearReservaUseCase;
        this.obtenerReservasUseCase = obtenerReservasUseCase;
        this.buscarUsuarioPorCorreoUseCase = buscarUsuarioPorCorreoUseCase;
    }

    @PostMapping
    public ResponseEntity<ReservaResponseDTO> crearReserva(RequestEntity<CrearReservaRequestDTO> request,
            Authentication autenticacion) {

        CrearReservaRequestDTO dto = request.getBody();

        if (dto == null) {
            return ResponseEntity.badRequest().build();
        }

        String email = autenticacion.getName();
        Usuario usuario = buscarUsuarioPorCorreoUseCase.buscarPorCorreo(email);

        Reserva reserva = new Reserva();
        reserva.setUsuarioId(usuario.getId());
        reserva.setSalaId(dto.getSalaId());
        reserva.setHoraInicio(dto.getHoraInicio());
        reserva.setHoraFin(dto.getHoraFin());
        reserva.setProposito(dto.getProposito());
        reserva.setCreatedAt(LocalDateTime.now());

        Reserva reservaCreada = crearReservaUseCase.crear(reserva);

        ReservaResponseDTO response = new ReservaResponseDTO();
        response.setId(reservaCreada.getId());
        response.setSalaId(reservaCreada.getSalaId());
        response.setHoraInicio(reservaCreada.getHoraInicio());
        response.setHoraFin(reservaCreada.getHoraFin());
        response.setProposito(reservaCreada.getProposito());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<ReservaResponseDTO>> obtenerTodas(Authentication autenticacion) {

        String email = autenticacion.getName();
        Usuario usuario = buscarUsuarioPorCorreoUseCase.buscarPorCorreo(email);

        List<Reserva> reservas = obtenerReservasUseCase.obtenerPorUsuarioId(usuario.getId());

        List<ReservaResponseDTO> response = reservas.stream().map(reserva -> {
            ReservaResponseDTO dto = new ReservaResponseDTO();
            dto.setId(reserva.getId());
            dto.setSalaId(reserva.getSalaId());
            dto.setHoraInicio(reserva.getHoraInicio());
            dto.setHoraFin(reserva.getHoraFin());
            dto.setProposito(reserva.getProposito());
            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservaResponseDTO> obtenerPorId(@PathVariable Long id) {

        Reserva reserva = obtenerReservasUseCase.obtenerPorId(id);

        ReservaResponseDTO response = new ReservaResponseDTO();
        response.setId(reserva.getId());
        response.setSalaId(reserva.getSalaId());
        response.setHoraInicio(reserva.getHoraInicio());
        response.setHoraFin(reserva.getHoraFin());
        response.setProposito(reserva.getProposito());

        return ResponseEntity.ok(response);
    }

}
