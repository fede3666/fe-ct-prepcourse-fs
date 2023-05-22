/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   return string;
   var miString = "Hola, soy un string";
   var resultado = devolverString(miString);
   console.log(resultado);
    }

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   return x + y;
   var resultado = suma(5, 3);
console.log(resultado);



  
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   return x - y;
   var resultado = resta(5, 3);
console.log(resultado);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   return x / y;
   var resultado = divide(5 / 3);
console.log(resultado);
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return x * y;
   var resultado = multiplica(5 * 3);
console.log(resultado);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   return x % y;
   var resultado = obtenerResto(5 % 3);
console.log(resultado);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};