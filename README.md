# Weather App

Una aplicación simple para obtener el clima actual y el pronóstico de 5 días utilizando la API de OpenWeatherMap.

## Instalación

Tener instalado node y npm.

1. Clona este repositorio:

   ```bash
   git clone https://github.com/pabloroque1/clima-app.git

2. Instalar librerias:

   ```bash
   npm install

3. Correr el servidor:

   ```bash
   npm start

4. Correr los test:

   ```bash
   npm test

5. Probar los endpoints: 

   ```bash
   Las rutas son:
         /v1/weather/location
         /v1/weather/current?city
         /v1/weather/forecast?city
    Si no se envia ningun query param en city, la api trae por defecto la del ip.