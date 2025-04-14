const numbers = [3, 8, 2, 10, 5, 7];
const otherNumbers = [30,12,6,2,15,22];


function findMax(arr){

    if(arr.length === 1){
        return arr[0];
    }

    const midArray = Math.floor (arr.length / 2);
    const left = arr.slice(0 , midArray);
    const right = arr.slice(midArray);

    const maxLeft = findMax(left);
    const maxRight = findMax(right);

    return Math.max(maxLeft, maxRight);
}

console.log(findMax(numbers));
console.log(findMax(otherNumbers)); 