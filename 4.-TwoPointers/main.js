
const arr = [2, 7, 11, 15];
let target = 9;

function encontrarOar (array, target){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        let result = array[left] + array[right];
        if(result === target){
            return [array[left], array[right]];
        }else if(result < target){
                left++;
        }else{
            right--;
        }
    }
    return null;
}

let result = encontrarOar(arr, target);
console.log(result);

let newarr = [2, 15, 7, 9, 11, 8, 10, 44, 6];

function improveTwoSum(newarr, target){
    let left = 0;
    let right = newarr.length -1;

    let counter = 0;
    while(left < right){
        let result = arr[left] + arr[right];
        if(result === target){
            return [arr[left], arr[right]];
        }
        counter++;
        if(counter % 2 === 0){
            right--;
        }else{
            left++;
        }
    }
    return null;
}

let improveResult = improveTwoSum(newarr, target);
console.log(improveResult);

// Ejercicio
function feast(breast, dish){

    let beastLemght = beast.length;
    let dishLenght = dish.length;

    if(breast.charAt() === dish.charAt() && beast.charAt(beastLemght -1) === dish.charAt(dishLenght -1)){
        return true;
    }else{
        return false;
    }
}

const feast = (beast, dish) =>{
    return if(breast.charAt() === dish.charAt() && beast.charAt(beastLemght -1) === dish.charAt(dishLenght -1))? true: false
}