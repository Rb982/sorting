
const split=(arr)=>{
    const firstHalf=arr.slice(0,arr.length/2);
    const secondHalf=arr.slice(arr.length/2);
    console.log("First: ", firstHalf, "Second: ", secondHalf);
    return [firstHalf, secondHalf]
}
const joinSorted=(arr1, arr2)=>{
    const toReturn=[];
    while(arr1.length &&arr2.length){
        toReturn.push(arr1[0]<arr2[0] ? arr1.shift() : arr2.shift());
    }
    while (arr1.length || arr2.length){
        toReturn.push(arr1.length? arr1.shift():arr2.shift());
    }
    return toReturn;

}

const mergeSort=(arr)=>{
    if(arr.length<=1) return arr;
    const splitArr=split(arr).map(el=>mergeSort(el));
    
    return joinSorted(splitArr[0], splitArr[1]);
}
split([0, 1, 2]);