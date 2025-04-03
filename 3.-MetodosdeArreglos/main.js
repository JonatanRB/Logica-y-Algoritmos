//REDUCE Cuando necesitamos realizar un calculo acumulativo

const letras = ["H","O","L","A"];

let palabra = letras.reduce((palabra, letra) => palabra + letra);
console.log(palabra);

console.log(letras[0] + letras[1] + letras[2] + letras[3]);

let palabraFor = "";
for(let i = 0; i<letras.length; i++){
    palabraFor += letras[i];
}
console.log(palabraFor);

// EVERY Comprueba si todos los elementos satisfacen un criterio(condicion)

const tareas = [
    {
        nombre: "Lavar trastes",
        pendienete: false
    },
    {
        nombre: "Hacer tarea",
        pendienete: true
    },
    {
        nombre: "Limpiar cuarto",
        pendienete: false
    },
    {
        nombre: "Tirar la basura",
        pendienete: false
    },
    {
        nombre: "Estudiar Js",
        pendienete: false
    },
];

let todasLasTareasSonPendientes = tareas.every((tarea) => tarea.pendienete === true);
console.log(todasLasTareasSonPendientes);

let resultado = true;
let elementoActual = tareas[0].pendienete;
for(let i = 1; i<tareas.length; i++){
    if(elementoActual != tareas[i].pendienete){
        resultado = false;
    }
    elementoActual = tareas[i].pendienete;
}
console.log(resultado);

function verificarAtributo(arr, key){
    let elementoActual = arr[0][key];
    for(let i = 1; i<tareas.length; i++){
        if(elementoActual != arr[0][key]){
            return false;
        }
        elementoActual = arr[0][key];
    }
    return true;
}

console.log(verificarAtributo(tareas, "pendiente"));

const productos = [
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "fresa",
        precio: 20
    },
];

console.log(verificarAtributo(productos,"precio"));
console.log(verificarAtributo(productos,"nombre"));

// INCLUDES Se usa cuando se necesita saber si un elemento existe en un arreglo

const incluyeO = letras.includes("O"); // include no funciona con objetos 
console.log(incluyeO);

// SOME Se usa si al menos algun elemento cumple con la condicion

// Verificar si una tarea ha sido cumplida
const unaTareaCumplida = tareas.some((tarea) => tarea.pendienete === true);
console.log(unaTareaCumplida);

//SPLICE

// OBJETOS
const carritoCompra = {
    productos: [],
    agregarProducto: function(producto){
        this.productos.push(producto.toLowerCase()); // this hace referencia al mismo objeto
    },
    eliminarProducto: function(producto){
        let indiceDelProducto = this.productos.indexOf(producto.toLowerCase());
        if(indiceDelProducto === -1){
            console.log("no se encontro ningun producto");
            return;
        }
        this.productos.slice(indiceDelProducto, 1); // elimina elementos en base a un indice y la cantidad de elementos que borrta
    },
    mostrarProductos: function(){
        this.productos.forEach((producto) => console.log(producto));
    }
}

carritoCompra.agregarProducto("Manzana");
carritoCompra.agregarProducto("Freasa");
carritoCompra.agregarProducto("Kiwi");

carritoCompra.mostrarProductos();

carritoCompra.eliminarProducto("fresas");

carritoCompra.mostrarProductos();

