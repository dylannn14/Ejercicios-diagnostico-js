let opcion;

do {
  opcion = prompt("Elige una opción (solo coloca el):Opcion1: Saludar Opcion2: Mostrar fecha actual Opcion3: Mostrar un número aleatorio Opcion4: Salir");

  // Ejecutar la acción según la opción seleccionada
  switch (opcion) {
    case "1":
      console.log("Hola mundo");
      break;
    case "2":
      let fechaActual = new Date();
      console.log("Fecha actual:");
      break;
    case "3":
      let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      console.log("Número aleatorio: " + numeroAleatorio);
      break;
    case "4":
      console.log("Nos vemos!");
      break;
    default:
      console.log("Esa opcion no existe, elegi de las disponibles.");
  }

} while (opcion !== "4");
