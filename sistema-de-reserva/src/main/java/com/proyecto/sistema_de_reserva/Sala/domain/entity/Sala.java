package com.proyecto.sistema_de_reserva.Sala.domain.entity;

import java.util.List;
import com.proyecto.sistema_de_reserva.Sala.domain.entity.Equipo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sala {
    private Long id;
    private String nombre;
    private Integer capacidad;
    private String ubicacion;
    private List<Equipo> equipo;

}
