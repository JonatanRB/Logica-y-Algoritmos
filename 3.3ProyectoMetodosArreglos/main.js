const productos = [
    { nombre: "Mesa de escritorio", precio: 1500, categoria: "Muebles" },
    { nombre: "Camiseta Estampada", precio: 50, categoria: "Ropa" },
    { nombre: "Tenis", precio: 600, categoria: "Calzado" },
    { nombre: "Clean Code", precio: 554, categoria: "Libros" },
    { nombre: "Auriculares", precio: 99, categoria:"Electrónica" },
]


const filterProduct = productos.filter((productos) => productos.precio < 100);
console.log(filterProduct);

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(productos);

const soloNombre = productos.map((producto) => console.log(producto.nombre));

let todosTienenCategoria = productos.every((producto) => producto.categoria !== "");
console.log(todosTienenCategoria);

