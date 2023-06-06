// Let , const
// Template Literals
// Multi-line String
// Arrow function
// Classes
// Default parameter values
// Destructuring
// Rest parameters
// Spread
// Enhanced object literals
// Tagged template literals
// Modules
//Bale

// 1 . Var / Let / Const: Scope, Hoisting
// 2 . Const / Var, Let: Assignment


// Code blocl: if else, loop , {}, ...

// const a = {
//     name: 'AAA',
// };
// a.name = 'BBB';

// console.log(a);

// Arrow function
//  const myfunc = (log) =>{
//     console.log(log);
//  }
//     myfunc('Message...');

// const sum = (a, b) => ({a: a,b: b});

// console.log(sum(1, 2));

// const logger = (log)=> console.log(log);
// logger('Message...');

// const obj = {
//     name : 'Javascript',
//     getName: ()=>{
//         return this.name; // context
//     }
// };
// console.log(obj.getName());

// const obj = function(name,price){
//     this.name = name;
//     this.price = price;
   
// }
// const js = new obj('Javascript',1000);
// console.log(js);

// const courseName = 'Java';
// // const description = 'Course name:' + courseName;
// const description = `Course name: ${courseName}`;
// console.log(description);

const lines = 'Line 1\nLine 2'
+ '\nLine 3'
+ '\nLine 4'
+ '\nLine 5'; 
console.log(lines);