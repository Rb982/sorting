function bubbleSort(arr, callback=(a, b)=>(2*(a<b)-1)) {
  let bool = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (/*arr[i] > arr[i + 1]*/ callback(arr[i], arr[i+1])<0) {
      bool = true;
      sortLogic(arr, i);
    }
  }

  if (bool) {
    return bubbleSort(arr, callback);
  }
  return arr;
}

function sortLogic(arr, i) {
  const thisNum = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = thisNum;
}
