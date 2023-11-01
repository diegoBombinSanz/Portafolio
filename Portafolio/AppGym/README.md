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
![CrearRutina](./model/Crear%20Rutina.pdf)

Este diagrama lo que muestra es el proceso por el cual se efectua la creacion de cada rutina. En la que se detalla, paso a paso, los diferentes acciones que el sistema ha de realizar modelando asi la activadad.

Descripcion de la actividad [CrearRutina]:
<br>Lo primero que hacer el usuario cuando crea la rutina es seleccionar los dias de la semana que quiere entrenar.Ademas se le sugiere la Push-Pul-Leg, la Arnold, la combinación, etc.<br>
Una vez seleccionados los dias/estructura a seguir se va dia a dia para seleccionar los ejercicios que se quieren.<br>
Si no ha seleccionado ninguna estructura de entrenamiento lo primero será selecionar el/los grupo(s) muscular(es) que quiera entrenar ese dia. Si si que seleccionado una estructura de entrenamiento, este paso sera automatico.<br>
Una vez con el grupo muscular toca seleccionar los ejercicios a realizar con sus caracteristicas. Para ello cuenta con una lista y una serie de filtros con los que poder moverse para encontrar el ejercicio que quiere realizar.<br>
Con el ejercicio ya seleccionado tocaria especificar el numero de series y repeticiones (aunque salgan una predeterminadas por cada ejercicio). Y especificar el rir. Una vez guarda la rutina, simplemente habria que ejecutarla cada dia.

### Modelado Requisitos
![ModeloRequisitos](./model//Modelo%20de%20Requisitos.xlsx)

### Diagrama de Casos de Uso

### Diagrama de Clases


## Diagrama Entidad-Relacion