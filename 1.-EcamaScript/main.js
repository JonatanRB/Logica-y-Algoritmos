/* const suma = function(a,b){
    return a + b;
} */

const suma = (a,b) => { // La flecha es como si fuera un return sin llaves con  llaves se necesita poner el return.
    return a + b;
}
console.log(suma(5,8));

const generarMensageSaludo = (nombre) => "Hola, " + nombre;

console.log(generarMensageSaludo("Yo mero"));

const array = [1,2,3,4,5,6,7,8,9];

array.forEach(function(item, index){
    console.log(item + 1);
});

array.forEach((item, index) =>{ 
    console.log(item + 1);
});

//map retorna un arreglo con cada uno de los elementos que le indiquemos.
//Recibe una funcion que debe tener tres parametros (un valor, indice, arreglo)  map manipula los valores de arreglo y retorna un nuevo arreglo.
const newArray = array.map((item,index) => { 
    return item + 1;
});

const forEachResult = newArray.forEach((item) => {
    console.log(item)
})
console.log(forEachResult);

let nombre = "Yo mero";

const miDiv = document.querySelector(".mi-div");

/*miDiv.insertAdjacentHTML("beforeend",`
    <p> Este elemento p ha sido insertado utilizando JS ${nombre} </p>
    `); */

/* miDiv.insertAdjacentHTML("beforeend",`
    <p>${array.map((item) => item)}</p>
    `); */

const pElements = array.map((item) =>  `<h1>${item}</h1>`);

console.log(pElements);

pElements.forEach((element) => {
    miDiv.insertAdjacentHTML("beforeend",element);
});

const options = {
    isEnable: true,
    time: 15,
    code: "Aproved"
}

const {isEnable,time,code} = options;

console.log(isEnable,time,code);

