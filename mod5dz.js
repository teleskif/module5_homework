//Задание №1

var a = 2;


if (typeof a == "number"){
    if(a%2==false){
    console.log('чётное')
    }else{
        console.log('нечётное')
    }
}else{
    console.log('Упс, кажется, вы ошиблись')
}

//Задание №2
const x = 1;

if (typeof x == "number"){
    console.log( x + " - число" )
}
else  if (typeof x == "string"){
    console.log( x + " - строка" )
}
else if(typeof x == "boolean"){
    console.log(x+' логический тип')
}

//Задание №3

function reverseString(str) {

    return str.split("").reverse().join("");
  
  }

  reverseString("Hello");
    console.log(reverseString("Hello"))

//Задание №4

let d = Math.round(Math.random() * 100);

console.log(d)

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

//Задание №6

let array = [1,1,2];
for (let i = 0; i < array.length; i++) {
    if(array[i] == array[i+1]){
     console.log('true');
     
    }
    else{
        console.log('false');
       
    }
    
}
