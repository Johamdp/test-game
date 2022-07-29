// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
    // Tu código:   
    return array[0];
  }
  
  
  export function devolverUltimoElemento(array) {
    // Tu código:   
    return array[array.length-1];
  }
  
  
  export function obtenerLargoDelArray(array) {
    // Tu código:   
    return array.length;
  }
  
  
  export function incrementarPorUno(array) {
    // Tu código:
    return array.map(function (item) {
      return item + 1;
    });
  }
  
  
  export function agregarItemAlFinalDelArray(array, elemento) {
    // Tu código:   
    return array.concat(elemento);
  }
  
  
  export function agregarItemAlComienzoDelArray(array, elemento) {
    /// Tu código:   
    return [elemento].concat(array);
  }
  
  
  export function dePalabrasAFrase(palabras) {
    // Tu código:   
    return palabras.join(" ");
  }
  
  
  export function arrayContiene(array, elemento) {
    // Tu código:   
    return array.includes(elemento);
  }
  
  
  export function agregarNumeros(numeros) {
    // Tu código:   
    return numeros.reduce((x,y) => x+y, 0);
  }
  
  
  export function promedioResultadosTest(resultadosTest) {
    // Tu código:   
    return resultadosTest.reduce((x,y)=> x+y, 0) / resultadosTest.length;
  }
  
  
  export function numeroMasGrande(numeros) {
   // Tu código:   
   return numeros.reduce((x,y) => x>y?x:y);
  }
  
  
  export function multiplicarArgumentos() {
    // Tu código:   
    return;
  }
  
  
  export function cuentoElementos(arreglo){
   // Tu código:   
   let counter = 0;
   arreglo.forEach((number) => (number > 18 ? counter++ : counter));
   return counter;
  }
  
  
  export function diaDeLaSemana(numeroDeDia) {
    // Tu código: 
    let msg = 'Es dia de semana'
    if (numeroDeDia == 1 || numeroDeDia == 7)
      msg = 'Es fin de semana'
    return msg;
  } 
  
  
  export function empiezaConNueve(n) {
   // Tu código:      
    return String(n)[0] == 9; 
  }
  
  
  export function todosIguales(arreglo) {
   // Tu código:   
    return arreglo.every((item) => item === arreglo[0]);
  } 
  
  
  export function mesesDelAño(array) {  
    // Tu código:   
    const newArray = ["Marzo", "Noviembre", "Enero"];
    let contains =
      array.includes(newArray[0]) &&
      array.includes(newArray[1]) &&
      array.includes(newArray[2]);
    return contains ? newArray : "No se encontraron los meses pedidos";
  }
  
  
  export function mayorACien(array) {
    // Tu código:  
    return array.filter(num=>num>100);
  }
  
  
  export function breakStatement(numero) {
    // Tu código:  
    let arr = [];
    let i = 0;
    let sum = numero;

    while(i<10 && i!=sum){
      sum+=2;
      arr.push(sum);
      i++;
    }

    if(i==10){
      return arr;
    }else
      return 'Se interrumpió la ejecución';
  }
    
    
  export function continueStatement(numero) {
    // Tu código:    
  const array = [];
  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero = numero + 2;
    array.push(numero);
  }
  return array;
  }