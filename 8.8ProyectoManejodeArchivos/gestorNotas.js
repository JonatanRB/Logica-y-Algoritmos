const fs = require('fs');
const { title } = require('process');

const filePath = './notas.json';

function addNote(title, content){
    let notes = [];

    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf8');
        notes = JSON.parse(data);
    }

    const newNote = {title, content};
    notes.push(newNote);

    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));

    console.log("Nota agregada!!!");
}

function notesList(){
    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf8');
        const notes = JSON.parse(data);

        console.log("Notas guardadas:");
        notes.forEach((note, index) => 
            {console.log(`${index + 1}. ${note.title}: ${note.content}`);
        });

    }else{
        console.log('No hay notas guardadas.');
    }
}

function deleteNote(title){
    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf8');
        const notes = JSON.parse(data);

        const remainingNotes = notes.filter((note) => note.title !== title);
    
        if(notes.length === remainingNotes.length){
            
            console.log(`No se encontro la contro ${title}`);
        }else{
            fs.writeFileSync(filePath, JSON.stringify(remainingNotes, null, 2));
            console.log(`Nota con titulo ${title} eliminada!!!`);
        }
    }else{
        console.log('No hay notas para eliminar.');
        
    }
}

addNote('Compras', 'Comprar leche y pan.');
notesList();
deleteNote('Compras');

addNote('Tareas','Lecturas dev.f');
notesList();