# Fooding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About Fooding app

Esta una app es una social media donde los usuarios interactuaran con otros usuarios a travez de la app pero compartiendo recetas.

## Funcionalidad de la app

### Registro de usuario:

	 Como usuario no regristrado quiero registrarme para acceder a la aplicacion
	 - Nombre de usuario: Requerido
	 - Email: Requerido, debe tener formato de email
	 - Contraseña: Requerido, maximo 20 caracteres, minimo 8 caracteres, al menos una mayuscula, una minuscula y un numero
	
	 EXITO: Cuando se registra un usuario => Navegacion a pagina de login
	 FRACASO: 
		. Cuando los campos estan mal cargados => se muestra mensaje
		. Cuando el usuario ya esta registrado => se muestra mensaje
		. Cuando no acepta los terminos y condiciones => se muestra mensaje
		. Cuando ocurre un error tecnico => se muestra mensaje

### Login:

	Como usuario registrado quiero ingresar logueado para usar la aplicacion
	 - Nombre de usuario o email: requerido, debe estar registrado
	 - Contraseña: requerido, debe estar registrada
	 EXITO: El usuario se pudo loguear ingresando nombre de usuario y contraseña validos => Si es la primera vez se navega a la pagina de perfil, si no es la primera vez se navega al landing
	 FRACASO: 
		. El usuario y/o contraseña no estan registrados o no coinciden con los registrados => se muestra mensaje
		. Cuando ocurre un error tecnico => se muestra mensaje

### Perfil Usuario:

	Como usuario logueado quiero cargar o modificar mi perfil para tenerlo actualizado
	 - Nombre, requerido
	 - Apellido, requerido
	 - Fecha de nacimiento (campo fecha)
	 - Ciudad
	 - Contraseña, requerida si Repetir contraseña tiene un valor
	 - Repetir contraseña, requerido si Contraseña tiene un valor y debe igual Contraseña

	 EXITO: Cuando el usuario carga o modifica su perfil => navega a landing
	 FRACASO: 
		. No se cargan los campos requeridos => se muestra mensaje "Campos obligatorios"  

### Listado de recetas de usuario:

	Como usuario logueado quiero buscar recetas en las que soy autor o le he dado like en la aplicacion
	 - Buscador (por receta, ingrediente o usuario) (Solo dentro de las recetas del usuario)
	 - Tarjetas de recetas
		- Imagen, en click => vista detalle
		- Descripcion, inicialmente muestra Nombre de Receta y "Ver mas", al hacer click en "Ver mas" navega a la vista Detalle de receta
		- Boton y Contador de likes, muestra en el texto la cantidad de likes, icono vacio cuando el usuario logueado no le ha dado like, icono lleno cuando el usuario le ha dado like. Al hacer click, se quita el like, se registra y se refrescan los resultados
		- Boton de compartir, al hacer click se copia el link directo de la receta en el portapapeles, se muestra mensaje "Copiado al portapapeles", se registra una compartida mas de la receta
		- Boton de ver comentarios, muestra un icono de comentarios y la cantidad de comentarios, al hacer click navega a la vista detalle de receta y hace scroll hasta los comentarios
		- Boton de Editar, solo visible si el usuario logueado es el autor de la receta, navega a la vista Crear y editar receta en modo edicion
		- Boton de Eliminar, solo visible si el usuario logueado es el autor de la receta, se muestra prompt de seguridad con el texto "Estas seguro de eliminar esta receta?", si el usuario clickea "Si" se elimina, si clickea "No" se esconde el prompt      


## Gestion de recetas


	Landing o home
	 - Buscador (por receta, ingrediente o usuario)
	 - Tarjetas de recetas
		- Imagen
		- Descripcion (Nombre, ingredientes, se abre como detalle aparte)
		- Boton y Contador de likes
		- Boton de compartir
		- Boton de ver comentarios

	Detalle de receta
	 - Imagen o imagenes
	 - Nombre de la receta
	 - Detalle
	 - Tiempo de elaboracion
	 - Boton y Contador de likes
	 - Boton de compartir
	 - Comentarios
	 
	Crear y editar receta
	 - Nombre de receta
	 - Ingredientes
	 - Procedimiento
	 - Tiempo de elaboracion
	 - Subir imagenes
	 
	Receta inversa
     -En la barra de navegación habra un search donde se podrán buscar recetas por ingrediente/s, nombre y/o palabra clave
	 - Boton de busqueda.

## Tecnologías

    Angular 9
    


	


