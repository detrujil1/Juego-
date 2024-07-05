const listaGenerica = []
const lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python']
const elementoABuscar = 'JavaScript';
const elementoInexistente = 'Swift';
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');



// promedio 
numeros =[10,20,50,20,60];
list2 =[20,15,48,15,60]

function calculopromedio(numeros) {
    suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    promedio = suma / numeros.length;
    return promedio ;
}
function sumadearray(numeros){
    suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma
}

function CalculateMaxMin(numeros){
    const maximo =Math.max(...numeros);
    const minimo =Math.min(...numeros);
    return {minimo, maximo};
}

function encontrarPosicion(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion;
}
 function sumadelistas(numeros,list2){
if (numeros.length !== list2.length){
    console.log ("la lista debe tener la misma cantidad de datos ") 
}
const resultado=[];
for (let i=0;i<numeros.length;i++){
    resultado.push(numeros[i]+list2[i]);
}
return resultado
}

function arraycuadrado(numeros){
    const residuo =[]
    for (let i=0;i<numeros.length;i++){
        residuo.push(numeros[i]*numeros[i]);
    }
    return residuo
}

const listaSuma =sumadelistas(numeros,list2);
const { maximo, minimo } = CalculateMaxMin(numeros);
const listcuadrado = arraycuadrado(numeros);


const posicionElemento = encontrarPosicion(lenguagesDeProgramacion, elementoABuscar);
const posicionElementoInexistente = encontrarPosicion(lenguagesDeProgramacion, elementoInexistente);
const listaInvertida = lenguagesDeProgramacion.reverse();



console.log (lenguagesDeProgramacion)
console.log (listaInvertida)
console.log(`El promedio es: ${calculopromedio(numeros)}`);
console.log(`El valor máximo es: ${maximo}`);
console.log(`El valor mínimo es: ${minimo}`);
console.log(`la suma del array es: ${sumadearray(numeros)}`);
console.log(`La posición de '${elementoABuscar}' en la lista es: ${posicionElemento}`);
console.log(`La posición de '${elementoInexistente}' en la lista es: ${posicionElementoInexistente}`);
console.log(`La lista resultante es: ${listaSuma}`);
console.log(`La lista resultante es: ${listcuadrado}`);