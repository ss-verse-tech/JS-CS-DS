let arr = [1,2,3, false, true, "Shubh"];
// console.log(arr);

// arr.push(4)
// console.log(arr);

// arr.pop()

// arr.unshift(10)
// arr.shift()

// slice and splice

// slice
 //(index_value, end-1)
// console.log(arr.slice(4,10000));
// arr[2] = 2;

// console.log(arr.splice(1,3));
// console.log(arr);


//  Conecept of Distructuring  

// let a = [1,2,3,4,5];

// let [a,b,c, d, e, f] = [1,2,3,4,5]
// // console.log(a);
// console.log(f);

// concept of spread operator

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];
// // let arr3 = arr.concat(arr1)
// // console.log(arr3);
// // console.log(...arr);
// console.log(...arr, ...arr1);

// if else (Tarnary operator)

// a = 20;
// console.log(a%2===0?"win":"Loss"); // Tarnary operator



//  Loop, For loop, map, filter, reduce
// arr = [1,2,3,"Yash", true, false]
// let newArr = arr.map((val)=>{

// })
//  function -- function expression, callback function, IIFE , Nomral Function, Higher Order function

// Nomral function
// function add(a,b){
//     console.log(a+b);
// }
// add(2,3)


// // Function Expression
// let func = function (){
//     console.log("Function Expression");
// }
// func();

// Callback function -> A function 
// A callback function is a function passed as an argument to another function, which is executed later.

// function add(a,b, func){
//     console.log(a+b);
//     func(a,b)
// }

// function subtract(a,b){
//     console.log("I am calling from  subtract function", a-b);
// }

// add(2,5, subtract)
// subtract()
// add(2,5,subtract)


