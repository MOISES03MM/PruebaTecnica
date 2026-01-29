package com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.in.web;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Equipo;
import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;
import com.proyecto.sistema_de_reserva.Sala.domain.port.in.CrearSalaUseCase;
import com.proyecto.sistema_de_reserva.Sala.domain.port.in.ObtenerSalaPorIdUseCase;
import com.proyecto.sistema_de_reserva.Sala.domain.port.in.ObtenerSalasUseCase;

@RequestMapping("/sala")
@RestController
public class SalaControlador {

    private final CrearSalaUseCase crearSalaUseCase;
    private final ObtenerSalasUseCase obtenerSalasUseCase;
    private final ObtenerSalaPorIdUseCase obtenerSalaPorIdUseCase;

    public SalaControlador(CrearSalaUseCase crearSalaUseCase, ObtenerSalasUseCase obtenerSalasUseCase,
            ObtenerSalaPorIdUseCase obtenerSalaPorIdUseCase) {
        this.crearSalaUseCase = crearSalaUseCase;
        this.obtenerSalasUseCase = obtenerSalasUseCase;
        this.obtenerSalaPorIdUseCase = obtenerSalaPorIdUseCase;
    }

    @PostMapping
    public ResponseEntity<ResponseSalaDTO> crearSala(@RequestBody RequestSalaDTO dto) {
        Sala sala = new Sala();
        sala.setNombre(dto.getNombre());
        sala.setCapacidad(dto.getCapacidad());
        sala.setUbicacion(dto.getUbicacion());

        List<Equipo> listaEquipo = dto.getEquipoId().stream()
                .map(id -> {
                    Equipo e = new Equipo();
                    e.setId(id);
                    return e;
                }).toList();

        sala.setEquipo(listaEquipo);

        Sala salaCreada = crearSalaUseCase.crearSala(sala);

        ResponseSalaDTO respuesta = new ResponseSalaDTO(
                salaCreada.getId(),
                salaCreada.getNombre(),
                salaCreada.getCapacidad(),
                salaCreada.getUbicacion(),
                salaCreada.getEquipo());

        return ResponseEntity.status(HttpStatus.CREATED).body(respuesta);

    }

    @GetMapping
    public ResponseEntity<List<ResponseSalaDTO>> obtenerTodas() {
        List<Sala> salas = obtenerSalasUseCase.ejecutar();

        List<ResponseSalaDTO> respuesta = salas.stream()
                .map(s -> new ResponseSalaDTO(
                        s.getId(),
                        s.getNombre(),
                        s.getCapacidad(),
                        s.getUbicacion(),
                        s.getEquipo()))
                .toList();

        return ResponseEntity.ok(respuesta);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseSalaDTO> obtenerSala(@PathVariable Long id) {

        ResponseSalaDTO sala = obtenerSalaPorIdUseCase.obtenerPorId(id);
        return ResponseEntity.ok(sala);
    }
}
