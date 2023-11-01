# ProgressFit
Se trata de una aplicacion para el trabajo en el gym. Con ella podrás crear tus rutinas, anotar tus marcas en los ejercicios y ver el progreso en los mismos.

## Descripción
La aplicacion cuenta con un inicio de sesión con la que podremos guardar nuestros ejercicios o nuestras rutinas diarias en el gimnasio.<br>

```
Siempre suele ocurrir que el gimnasio está lleno y el ejercicio que nos toca no lo podemos realizar, y la mayoria de apps una vez creada la rutina no puedes cambiar los ejercicios, con [NombreAplicacion] podras editar la rutina en ese dia para cambiar el ejercicio
```
## Funcionalidades

|Sistema|Rutina|Ejercicio|
|--------|--------|--------|
|LogIn      |Crear Rutina|Seleccionar Grupo<br>Muscular |
|Registrarse|Ver Rutina|Selccionar tipo<br>ejercicio<br>(maquina/pesoLibre)|
|LogOut     |Editar Rutina|Establecer peso|
|Filtro para <br>elegir ejercicio|Borrar Rutina|Establecer RIR|
|Plantillas predefinidas<br>rutina|Añadir Ejercicio|Solicitar variantes|
|Visualizacion progreso|Borrar Ejercicio|Listado ejercicios|

## Gama de colores Aplicacion

Estan en css
```css
--cerulean-blue-50: #f2f5fc;
--cerulean-blue-100: #e3eaf6;
--cerulean-blue-200: #cddbf0;
--cerulean-blue-300: #aac3e6;
--cerulean-blue-400: #81a3d9;
--cerulean-blue-500: #6486cd;
--cerulean-blue-600: #506cc0;
--cerulean-blue-700: #475db3;
--cerulean-blue-800: #3d4c90;
--cerulean-blue-900: #354173;
--cerulean-blue-950: #242a47;
```

## Iconos para la aplicacion



```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```




## Modelo de Dominio
### Diagrama de Actividad
![Crear Rutina](./model/DiagramaCrearRutina.pdf)

Este diagrama lo que muestra es el proceso por el cual se efectua la creacion de cada rutina. En la que se detalla, paso a paso, los diferentes acciones que el sistema ha de realizar modelando asi la activadad.
### Requisitos Funcionales
### Requisitos de Informacion
### Reglas de Negocio
### Diagrama de Casos de Uso
### Diagrama de Clases

## Diagrama Entidad-Relacion