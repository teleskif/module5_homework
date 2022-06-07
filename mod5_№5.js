//Задание №5

let arr = [1,2,7];
let resultSum = arr.reduce(function(sum,  item, index, array){

    return sum + 1
  
  }, 0);
let result = arr.map(function(item, index, array){
    return item + 1
});

console.log(arr);
console.log(resultSum) 