const regalos = ["Hotweals", "Trompo", "Canicas", "Microscopio", "Pelota"];

function encontrarReegalo(regalos, nombreRegalo, index = 0){

    if(index === regalos.length){
        return `${nombreRegalo} no esta en la lista`;
    }else if(regalos[index] === nombreRegalo){
        return `${nombreRegalo} esta en la posicion ${index}`;
    }

    return encontrarReegalo(regalos, nombreRegalo, index + 1);
}

let regaloAEncontrar = "Microscopio";
console.log(encontrarReegalo(regalos,regaloAEncontrar));

regaloAEncontrar = "Tren";
console.log(encontrarReegalo(regalos,regaloAEncontrar));

