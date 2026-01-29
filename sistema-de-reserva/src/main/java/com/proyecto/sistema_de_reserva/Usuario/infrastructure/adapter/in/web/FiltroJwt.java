package com.proyecto.sistema_de_reserva.Usuario.infrastructure.adapter.in.web;

import java.io.IOException;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.proyecto.sistema_de_reserva.Usuario.domain.port.out.GeneradorToken;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class FiltroJwt extends OncePerRequestFilter {

    private final GeneradorToken generadorToken;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        // 1️⃣ Dejar pasar preflight CORS
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            filterChain.doFilter(request, response);
            return;
        }

        // 2️⃣ Dejar pasar endpoints públicos
        String path = request.getServletPath();
        if (path.equals("/usuario") || path.equals("/usuario/login")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 3️⃣ A partir de aquí SÍ aplicamos JWT
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);

            if (generadorToken.esTokenValido(token)) {
                String correo = generadorToken.obtenerCorreoDeToken(token);
                String rol = generadorToken.obtenerRolDeToken(token);

                var autorizacion = new SimpleGrantedAuthority(rol);

                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        correo, null, List.of(autorizacion));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        filterChain.doFilter(request, response);
    }

}
