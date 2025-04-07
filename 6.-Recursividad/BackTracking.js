function permute(str, path = "", result = []){
    if(str.lenght === 0){
        result.push(path);
    }else{
        for (let i = 0; i < str.length; i++) {
            const remainning = str.slice(0, i) + str.slice(i +1);
            console.log(remainning);
            permute(remainning, path + str[i], result);
        }
    }
    return result;
}

let result = permute("12345");
console.log(result);

