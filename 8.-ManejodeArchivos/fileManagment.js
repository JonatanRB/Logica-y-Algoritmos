const { error } = require("console");
const fs = require("fs");

fs.appendFile("miArchivo.txt", "Este es mi primer archivo  creado con node.js", function(err){
    if(err){
        throw err;
    }
    console.log("Guardado");
});

function tryError(){
    throw new error;
}

fs.open('miArchivo.txt', 'w', function(err){
    if (err) throw err;
    console.log('Guardado!');
});

//fs.writeFile('miArchivo.txt')

const miJson = {
    dia: 10,
    mes: 4,
    ano: 2025
}

const convertedJSON = JSON.stringify(miJson);
console.log(convertedJSON);

// Convertir a archivo JSON
fs.appendFile("JSONdata.txt", convertedJSON, function(err){
    if(err){
        throw err;
    }
    console.log("JSON Guardado");
});

// Leer el contenido de un JSON

let fileDta;

async function ReadFile(file){
    const data  = await fs.readFile(

    )
}

fs.readFile("JSONdata.txt",
    function(err, data){
        if(err){
            throw err;
        }
    fileData = data;
    }
);
