<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripción

La prueba técnica consiste en desarrollar una API REST utilizando NestJS como framework principal y PostgreSQL como base de datos para la persistencia de datos. La API debe incluir rutas para registrar usuarios, iniciar sesión mediante credenciales, y listar usuarios registrados, asegurando que esta última esté protegida mediante autenticación con JWT. Se hace uso de DTOs y validaciones con class-validator para garantizar la integridad de los datos, y se implementa un sistema de manejo de errores personalizado para mejorar la experiencia del cliente y facilitar el mantenimiento del código.

## Configuración del proyecto

```bash
$ npm install
```

## Compilar y ejecutar el proyecto

```bash
# desarrollo
$ npm run start

# modo vigilancia
$ npm run start:dev

# modo de producción
$ npm run start:prod
```
