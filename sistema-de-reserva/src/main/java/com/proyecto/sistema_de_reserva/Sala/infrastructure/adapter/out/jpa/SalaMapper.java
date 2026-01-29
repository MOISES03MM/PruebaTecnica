package com.proyecto.sistema_de_reserva.Sala.infrastructure.adapter.out.jpa;

import java.util.ArrayList;
import java.util.List;

import com.proyecto.sistema_de_reserva.Sala.domain.entity.Equipo;
import com.proyecto.sistema_de_reserva.Sala.domain.entity.Sala;

public class SalaMapper {
    public static Sala toDomain(SalaEntidad entidad) {
        Sala sala = new Sala();
        sala.setId(entidad.getId());
        sala.setNombre(entidad.getNombre());
        sala.setCapacidad(entidad.getCapacidad());
        sala.setUbicacion(entidad.getUbicacion());

        if (entidad.getEquipos() != null) {
            List<Equipo> listaEquipo = entidad.getEquipos().stream()
                    .map(e -> new Equipo(e.getId(), e.getNombre())).toList();
            sala.setEquipo(listaEquipo);
        }

        return sala;
    }

    public static SalaEntidad toEntity(Sala sala) {
        if (sala == null)
            return null;

        SalaEntidad entidad = new SalaEntidad();
        entidad.setId(sala.getId());
        entidad.setNombre(sala.getNombre());
        entidad.setCapacidad(sala.getCapacidad());
        entidad.setUbicacion(sala.getUbicacion());

        if (sala.getEquipo() != null) {
            List<EquipoEntidad> listaEntidades = sala.getEquipo().stream()
                    .map(e -> {
                        EquipoEntidad ee = new EquipoEntidad();
                        ee.setId(e.getId());
                        return ee;
                    })
                    .toList();
            entidad.setEquipos(new ArrayList<>(listaEntidades));
        }

        return entidad;
    }
}

/**
 * sala modelo
 * private Long id;
 * private String nombre;
 * private Integer capacidad;
 * private String ubicacion;
 * private List<Equipo> equipo;
 * 
 * sala entidad
 * 
 * @Id
 * @GeneratedValue(strategy = GenerationType.IDENTITY)
 *                          private Long id;
 * @Column
 *         private String nombre;
 * @Column
 *         private Integer capacidad;
 * @Column
 *         private String ubicacion;
 * 
 * @ManyToMany
 * @JoinTable(name = "sala_equipo", joinColumns = @JoinColumn(name = "sala_id"),
 *                 inverseJoinColumns = @JoinColumn(name = "equipo_id"))
 *                 private List<EquipoEntidad> equipos = new ArrayList<>();
 */
