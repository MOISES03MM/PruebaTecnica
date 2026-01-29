package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.out.jpa.security;

import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.proyecto.sistema_de_reserva.Usuario.domain.entity.Usuario;
import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.GeneradorToken;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtServiceAdapter implements GeneradorToken {

    private static final String SECRET_KEY = "tu_clave_super_secreta_y_muy_larga_para_que_sea_segura";

    @Override
    public String generarToken(Usuario usuario) {
        return Jwts.builder()
                .setSubject(usuario.getCorreo())
                .claim("rol", usuario.getRol())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 3600000))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes())
                .compact();
    }

    @Override
    public boolean esTokenValido(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY.getBytes()).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public String obtenerCorreoDeToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY.getBytes())
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public String obtenerRolDeToken(String token) {
        var claims = io.jsonwebtoken.Jwts.parser()
                .setSigningKey(SECRET_KEY.getBytes())
                .parseClaimsJws(token)
                .getBody();

        // Como tu rol es un objeto {"id":1, "nombre":"ADMIN"}, sacamos el nombre
        Map<String, Object> rolMap = (Map<String, Object>) claims.get("rol");
        return rolMap.get("nombre").toString();
    }

}
