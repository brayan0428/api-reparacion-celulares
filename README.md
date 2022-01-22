# Descripción del Proyecto

### Tecnologias utilizadas

Para la construcción de esta aplicación se utilizo Node Js, Express, Sequelize, JsonWebTokens, Middlewares, entre otros.

### Ejecución de la app

Para ejecutar la aplicación en modo desarrollo, primero se debe hacer la instalacion de los paquetes por medio del comando _npm install_. Luego de esto se debe configurar en el archivo config.js las variables de la base de datos (usuario, contraseña, host, nombre). Dentro del repositorio se encuentra un archivo _script.sql_ el cual tiene los comandos necesarios para crear la estructura de la base de datos. Una vez se hayan hecho todas estas configuraciones, se puede ejecutar la app con el comando _npm run dev_

### Funcionamiento de la Aplicación

La aplicación contiene multiples endpoints los cuales nos van a permitir consultar y crear clientes, consultar y crear telefonos de un cliente, iniciar sesión, registrar un nuevo usuario y consultar y crear reparaciones a los telefonos.
