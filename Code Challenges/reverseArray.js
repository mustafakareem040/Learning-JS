// Write your code here:
const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};
function reverseArray(arr) {
  const new_result = [];
  const length = arr.length/2;
  let target;
  for (let i = 0; i < length; i++) {
    target = arr.length-i-1;
    swapElements(arr, i, target);
  }
  return arr;
}
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 