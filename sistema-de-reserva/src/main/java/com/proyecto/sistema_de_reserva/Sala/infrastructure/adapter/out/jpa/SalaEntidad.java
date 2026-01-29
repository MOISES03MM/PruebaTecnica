package com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.out.jpa;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class SalaEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nombre;
    @Column
    private Integer capacidad;
    @Column
    private String ubicacion;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "sala_equipo", joinColumns = @JoinColumn(name = "sala_id"), inverseJoinColumns = @JoinColumn(name = "equipo_id"))
    private List<EquipoEntidad> equipos = new ArrayList<>();
}
