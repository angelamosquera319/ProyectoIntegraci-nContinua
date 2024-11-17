# Proyecto Integración Continua

Este proyecto implementa dos contenedores que se comunican entre sí usando Docker y Docker Compose. Está diseñado como una base para un proyecto web que puede ampliarse con HTML, CSS, JavaScript y JSON. Cada contenedor cumple una función específica para demostrar una estructura de microservicios básica.

## Integrantes del Grupo
- Angela Maria Mosquera Brand GRUPO B01

## Descripción de los Contenedores

### 1. Contenedor Web
- **Función**: Este contenedor utiliza Nginx para servir una página web HTML que muestra un mensaje de "Hola Mundo".
- **Imagen Base**: `nginx:latest`
- **Puerto Expuesto**: `8080` (localhost:8080)
- **Visita:** http://localhost:8080 en tu navegador para ver la página HTML con el mensaje "Hola Mundo desde el Contenedor Web".
- **Archivos Relevantes**:
  - `web/index.html`: Contiene el código HTML que muestra "Hola Mundo desde el Contenedor Web".
  - `web/Dockerfile`: Configura el contenedor para servir el archivo HTML mediante Nginx.

### 2. Contenedor API
- **Función**: Este contenedor usa Node.js y Express para crear una API que devuelve un mensaje JSON de "Hola Mundo".
- **Imagen Base**: `node:14`
- **Puerto Expuesto**: `3000` (localhost:3000)
- **Visita:** http://localhost:3000/api/hola para ver la respuesta JSON de "Hola Mundo desde el Contenedor API".
- **Archivos Relevantes**:
  - `api/server.js`: Código del servidor que responde con un mensaje JSON "Hola Mundo".
  - `api/package.json`: Especifica las dependencias del servidor (Express).
  - `api/Dockerfile`: Configura el contenedor para ejecutar el servidor API.

## Pasos para Crear los Contenedores

- **1. Crear el Dockerfile para el Contenedor Web:** En la carpeta web, crea un archivo Dockerfile con el siguiente contenido:

FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html

- **2. Crear el Dockerfile para el Contenedor API:** En la carpeta api, crea un archivo Dockerfile con el siguiente contenido:

FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY server.js .
EXPOSE 3000
CMD ["npm", "start"]

- **3. Crear el Archivo docker-compose.yml**
Para simplificar la creación y ejecución de ambos contenedores, crea un archivo docker-compose.yml en la raíz del proyecto con el siguiente contenido:

version: '3'

services:
  web:
    build: ./WEB
    ports:
      - "8080:80"
    networks:
      - mi_red

  api:
    build: ./API
    ports:
      - "3000:3000"
    networks:
      - mi_red

networks:
  mi_red:
    driver: bridge

## Ejecutar los Contenedores

- Abre una terminal en la carpeta principal.

- Ejecuta el siguiente comando para construir y levantar ambos contenedores:

docker-compose up --build
