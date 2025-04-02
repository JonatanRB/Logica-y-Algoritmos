// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino1 = (destino, fecha, transporte, personas) => {
    personas = parseInt(personas);
    
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto1(destino, transporte),
    }
    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto1 = (destino, transporte) =>{
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }else if (destino === "Argentina") {
        costoBase = 1500;
    }else if (destino === "Colombia") {
        costoBase = 400;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    destinos.forEach(function(viaje, index){
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
})
}


let iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino1("Paris", "2024-06-15", "Avión");
    registrarDestino1("Londres", "2024-07-01", "Tren");
    registrarDestino1("Argentina", "2024-07-02", "Tren",);
    registrarDestino1("New York", "2024-q0-10", "Avión");
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();