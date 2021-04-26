const arr = [0,3,3,4,5,33,5,-6,38,13,38,23,7,11,23,-9];
let count = 0;


function quickSort(array){
    if(array.length <=1){
        return array;
    }
    let pivotIndex = Math.floor(array.length/2);
    let pivot = array[pivotIndex];

    let less = [], greater = [];
    for (let i = 0; i < array.length; i++){
        if (i === pivotIndex)
        continue;
        if(array[i] < pivot){
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}
const t0 = performance.now();
console.log(quickSort(arr));
const t1 = performance.now();

console.log(t1 - t0);