// Ventana Fija
function maxSumaConsecutiva(arr, k){

    let maxSuma = 0;
    let sumaActual = 0;

    for(let i = 0; i < k; i++){
        sumaActual += arr[i];
    }

    maxSuma = sumaActual;

    for(let i = k; i < arr.lenght; i++){
        sumaActual += arr[i] - arr[i - k];
        maxSuma = Math.max(maxSuma, sumaActual);
    }
    return maxSuma;
}

console.log(maxSumaConsecutiva([2,1,5,1,3,2], 3));


//Ventana Variable
function ventanaVariable(arr, target){
    let sumaActual1 = 0;
    let inicio = 0;
    let longitudMinima = Infinity;

    for(let fin = 0; fin < arr.lenght; fin++){
        sumaActual1 += arr[fin];

        while(sumaActual1 >= target){
            longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
            sumaActual1 -= arr[inicio];
            inicio++
        }
    }
    return longitudMinima === Infinity ? 0 : longitudMinima;
}

console.log(ventanaVariable([2,3,1,2,4,3],7));
