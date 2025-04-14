let recursiveCounter = 0;

function binarySearch(array, taget, low, high){
    if(low > high){
        return -1;
    }

    let mid = Math.floor((low + high) / 2);
    recursiveCounter++;
    console.log(recursiveCounter);
    

    if(array[mid] === taget){
        return mid;
    }else if(array[mid] > taget){
        return binarySearch(array, taget, low, mid - 1);
    }else{ 
        return binarySearch(array, taget, mid + 1, high);
    }
}

const myArray = [1,3,5,7,8,9,12,15,17,19,21];

let foundTarget = binarySearch(myArray, 9, 0, myArray.length - 1);
console.log(foundTarget);
