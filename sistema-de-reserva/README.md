# 🏢 Sistema de Reserva de Salas

Este es un proyecto de backend desarrollado con **Java 17**, **Spring Boot 4** y **MySQL**, siguiendo los principios de la **Arquitectura Hexagonal** (Puertos y Adaptadores). El sistema permite la gestión de salas de reuniones y su equipamiento.


Tecnologías utilizadas
* **Lenguaje:** Java 17
* **Framework:** Spring Boot 4
* **Base de Datos:** MySQL 8.0
* **Persistencia:** Spring Data JPA + Hibernate
* **Seguridad:** Spring Security + JWT (JSON Web Tokens)
* **Contenerización:** Docker & Docker Compose
* **Arquitectura:** Hexagonal (Domain-Driven Design Lite)


##  Requisitos previos
Para ejecutar este proyecto, solo necesitas tener instalado:
* Docker Desktop
* Git

## Instalación y Despliegue

Sigue estos pasos para poner en marcha el proyecto en menos de 2 minutos:

1. **Clonar el repositorio:**
   ```bash
  - git clone [url.git]
  - cd sistema-de-reserva
  - docker compose up --build