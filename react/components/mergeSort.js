var nums = [10,5,3,8,2,6,4,7,9,1];

function merge(left, right) {
  let result = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())  
    }
  }
  console.log(result.concat(left.slice().concat(right.slice())))
  return result.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let div = arr.length / 2;
  let left = mergeSort(arr.slice(0, div));
  let right = mergeSort(arr.slice(div));

  return merge(mergeSort(left), mergeSort(right))

}

mergeSort(nums.slice());
