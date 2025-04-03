const numbers = [9,2,5,6,2];

//console.log(numbers);

// numbers.sort(); //metodo de ordenamiento

//console.log(numbers);


const bubbleSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
};

bubbleSort(numbers);
console.log(numbers);

const copyOfNumbers = [...numbers];
console.log(copyOfNumbers);

// 
let nombres = ["Diego", "Ana","Lalo"];

console.log(nombres);

//nombres = [true,false,true,false];
//console.log(nombres);

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for(let nombre of nombres){
    console.log(nombre);
}

// este es un objeto
const persona = {
    nombre: "Diego",
    edad: 21,
    saludar: () =>{
        console.log("Hola...")
    }
}

// los metodos siempre estan asociados a un objeto
const claveObjeto = Object.keys(persona); //retorna las claves de objeto

console.log(claveObjeto);

persona.saludar();

// -- Metodos basicos -- //

const frutas = ["manzana", "pera", "mango"];

frutas.shift(); // elimina el primer elemento de un arreglo

frutas.unshift("Melon"); // añadir un nuevo elemento al inicio

frutas.pop(); // elimina el ultimo elemto del arreglo

frutas.push("uva"); // añada un elemento al final de lalista

console.log(frutas,frutas.length); 

// FIND: se usa para obtener un dato especifico que cumpla un criterio (sola da el primer dato).
const miFrutaFavorta = frutas.find((element) => element === "pera");
console.log(miFrutaFavorta);

//MAP es un modifiocador del arreglo usando una funcion
const numeros = [1,2,3,4,10,8];

const modificaNumero = numeros.map((element) => element * 2);
console.log(modificaNumero);

const double = numeros.map((element, index, arr) => {
    const doubleNumber = element * 2;
    console.log(`El numero ${element} en el indice ${index} el resultado de multiplicarlo por 2 es ${doubleNumber}`);
    console.log(arr);
    return doubleNumber;
})

// FILTER crea un arreglo con todos los elementos que cumplan la condicion
const filterNumbers = numeros.filter((elemt) => elemt > 5);
console.log(filterNumbers);

//forEach ejeuta una funcion por cada elemento del arreglo (como si fuera un for pero sin crear un nuevo arreglo)
const listaFutas = frutas.forEach((element) => console.log(element));

// SORT metodo de ordenamiento
console.log(numeros.sort());// tiene problemas por la orden de dos digitos