const listaCompras = [];

const compras = {
    listaCompras: [],

    addProducto: function(producto){
        if(this.listaCompras.includes(producto)){
            console.log("Producto duplicado " + producto);
        }else{
            this.listaCompras.push(producto);
        }
    },

    deleteProducto: function(producto){
        const  index = this.listaCompras.indexOf(producto);
            if(index != -1){
                this.listaCompras.splice(index, 1);
            }else{
                console.log("Producto no encontrado");
                
            }
    },

    printCompras: function(){
        this.listaCompras.forEach((producto) => console.log(producto));
    },

    nonDuplicate: function(){

    }
}

compras.addProducto("Leche");
compras.addProducto("Helado");
compras.addProducto("Helado");
compras.addProducto("Pan");
compras.addProducto("Jugo");


console.log("Lista de Compras");
compras.printCompras();

compras.deleteProducto("Jugo")

console.log("Lista de Compras con un producto borrado");
compras.printCompras();
