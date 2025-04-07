const text = "JavaScript es un lenguaje de programación increíble para aprender.";

function findWord(text){

    const words = text.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length ; i++) {

        let actualoWord = words[i];

        if(actualoWord.length > longestWord.length){
            longestWord = actualoWord;
        }
    }
    return longestWord;
}

console.log(findWord(text));

