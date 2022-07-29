// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
  return x>y ? x : y;
}

export function mayoriaDeEdad(edad) {
  // Tu código:
  return edad>=18 ? 'Allowed' : 'Not allowed';
}
  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:
  const values = ['Online','Away','Offline']
  return values[status-1];
}

export function saludo(idioma) {  
  const saludos = {
    aleman : 'Guten Tag!',
    ingles : 'Hello!',
    mandarin : 'Ni Hao!',
    frances: 'Salut'
  }
  return saludos[idioma] || 'Hola!';
}

export function colors(color) {  
  //Usar el statement Switch.
  // Tu código:
  const validos = ['blue','red','green','orange']
  return validos.indexOf(color)>=0 ? `This is ${color}` : 'Color not found' 
}

export function esDiezOCinco(numero) {
  // Tu código:
  return numero === 10 || numero === 5;
}

export function estaEnRango(numero) {  
  // Tu código:
  return numero > 20 && numero < 50;
}

export function esEntero(numero) {
  // Tu código:
  return numero % 1 === 0;
}

export function fizzBuzz(numero) {
  // Tu código:
  if(numero % 15 == 0){
    return 'fizzbuzz';
  }else if (numero % 3 == 0){
      return 'fizz';
    }else if (numero % 5 == 0){
       return 'buzz';
    }else
      return numero;
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  // Tu código:
  if(num1===0 || num2===0 || num3===0){
    return "Error";
  }else if(num > 0 || num2 > 0 || num3 > 0){
    return "Hay negativos";
  }else if(num1 > num2 && num1 > num3){
    return "Numero 1 es mayor y positivo"
  }else if(num3 > num1 && num3 > num2){
    return num3 + 1;
  }else{
    return false;
  } 
}

export function esPrimo(numero) {
  /// Tu código: 
  if (numero === 1 || numero === 0) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

export function esVerdadero(valor){
  // Tu código:
  return valor ? "Soy verdadero" : "Soy falso";
}

export function tablaDelSeis(){
  // Tu código:
  return [0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
}

export function tieneTresDigitos(numero){
  // Tu código:
  return numero>99 && numero<1000;
}

export function doWhile(numero) {  
  //Usar el bucle do ... while.  
  let i = 0;
  
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}