function mergeArray(arr1, arr2) {
  let mergeArray = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
  console.log(mergeArray);

  return mergeArray;
}

mergeArray([1, 2, 4, 2, 2, 5, 2, 3], [1, 2, 3, 3]);
