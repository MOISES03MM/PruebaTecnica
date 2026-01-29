package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usuario")
@Entity
public class UsuarioEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;

    @Column()
    private String nombreCompleto;
    @Column(unique = true)
    private String correo;
    @Column()
    private String contrasenia;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "rol_id", nullable = false)
    private RolEntidad rol;
}
