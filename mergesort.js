
const split=(arr)=>{
    const firstHalf=arr.slice(0,arr.length/2);
    const secondHalf=arr.slice(arr.length/2);
    console.log("First: ", firstHalf, "Second: ", secondHalf);
    return [firstHalf, secondHalf]
}
const joinSorted=(arr1, arr2)=>{
    const toReturn=[];
    let arr1Counter=0;
    let arr2Counter=0;
    while(arr1Counter<arr1.length &&arr2Counter<arr2.length){
        toReturn.push(arr1[arr1Counter]<arr2[arr2Counter] ? arr1[arr1Counter] : arr2[arr2Counter]);
        arr1[arr1Counter]<arr2[arr2Counter] ? arr1Counter++ : arr2Counter++;
    }
    while (arr1Counter<arr1.length || arr2Counter<arr2.length){
        toReturn.push(arr1Counter<arr1.length? arr1[arr1Counter]:arr2[arr2Counter]);
        arr1Counter++;
        arr2Counter++;
    }
    return toReturn;

}

const mergeSort=(arr)=>{
    if(arr.length<=1) return arr;
    const splitArr=split(arr).map(el=>mergeSort(el));
    
    return joinSorted(splitArr[0], splitArr[1]);
}
split([0, 1, 2]);