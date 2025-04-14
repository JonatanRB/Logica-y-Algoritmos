function MinMax(array, startIndex, lastIndex){
    if(startIndex === lastIndex){
        return [array[startIndex], array[startIndex]];
    }

    if((lastIndex - startIndex) === 1){
        if(array[startIndex] > array[lastIndex]){
            return [array[lastIndex], array[startIndex]];
        }else{
            return [array[startIndex], array[lastIndex]];
        }
    }

    else{
        let mid = Math.floor((startIndex + lastIndex) / 2)
            let [lefMin, lefMax] = MinMax(array, startIndex, mid);
            let [righMin, righMax] = MinMax(array, mid + 1, lastIndex);

            return [Math.min(lefMin, righMin), Math.max(lefMax, righMax)];
    }
}









