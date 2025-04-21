let suma = 0; 
let numero; 
do {
  numero = (prompt("Ingresa un número (si ingresa 0 se termina):"));
  suma += numero;
} while (numero !== 0);

console.log("La suma de todos los números es: " , suma);
