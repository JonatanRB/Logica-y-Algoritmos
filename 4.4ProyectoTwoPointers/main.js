const invitados = ["Mariana", "Ana", "Aileen", "Jonatan", "Daniela", "Damian"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if(arr[inicio].charAt() === arr[siguiente].charAt()){
            return [arr[inicio], arr[siguiente]];
        }else{
            inicio++
            siguiente++
        }
    }

    return null; 
}

console.log(encontrarPareja(invitados));
