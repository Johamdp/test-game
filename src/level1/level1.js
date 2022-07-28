// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) { 
   // Tu código:    
  return str.toString(); 
}

export function suma(x1, x2) {
 // Tu código: 
  return x1+x2;   
}

export function resta(x3, x4) {
 // Tu código:
  return x3-x4;
}

export function multiplica(x3, x4) {
  // Tu código:
  return x3*x4;
}

export function divide(x3, x4) { 
  // Tu código:
  return x3/x4;
}

export function sonIguales(x3, x4) {  
  // Tu código:
  return x3===x4;  
}

export function tienenMismaLongitud(str1, str2) {  
  // Tu código:
  return str1.length === str2.length;
}

export function menosQueNoventa(num) {  
  // Tu código:
  return num < 90;
}

export function mayorQueCincuenta(num) {  
  // Tu código:
  return num > 50;
}

export function obtenerResto(x1,x2) {  
  // Tu código:
  return x1 % x2;
}

export function esPar(num) {
  // Tu código:
  return num % 2 === 0;
}

export function esImpar(num) {  
  // Tu código:
  return num % 2 === 1;
}

export function elevarAlCuadrado(num) {  
  // Tu código:
  return num^2;
}

export function elevarAlCubo(num) { 
  // Tu código:
  return num^3;
}

export function elevar(num, exponent) {  
  // Tu código:
  return Math.pow(num, exponent);
}

export function redondearNumero(num) {  
  // Tu código:
  return Math.round(num);
}

export function redondearHaciaArriba(num) { 
  // Tu código:
  return Math.ceil(num);
}

export function numeroRandom() {  
  // Tu código:
  return Math.random();
}

export function esPositivo(num) {
  // Tu código:
  if (Math.sign(num) === 1) {
    return "Es positivo";
  } if (Math.sign(num) === -1) {
      return "Es negativo";
  } else return false;
} 

export function agregarSimboloExclamacion(str) {  
  // Tu código:
  return str.toString() + "!";
}

export function combinarNombres(firstName, lastName) {
  // Tu código:
  return firstName + ' ' +  lastName;
}

export function obtenerSaludo(name) {
  // Tu código:
  return 'Hola ' + name + '!';
}

export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:
  return alto*ancho;
}


export function retornarPerimetro(lado){
  // Tu código:
  return lado*4;
}


export function areaDelTriangulo(base, altura){
  // Tu código:
  return (base * altura) / 2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  return (euro * 1.2);
}


export function esVocal(letra){
  // Tu código:
  const vocales = ['a' , 'e' , 'i' ,'o' ,'u'];
  if (letra.length > 1 || vocales.indexOf(letra) === -1) {
    return "Dato incorrecto";
  } else {
    return "Es vocal"};
  }