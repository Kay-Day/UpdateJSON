// var array = ['Java','PHP','Ruby'];
// // var a = array[0];
// // var b = array[1];
// // var c = array[2];
// var [a,,c] = array;

// console.log(a,c);

// // Rest parameter

// var array = ['Java','PHP','Ruby'];
// // var a = array[0];
// // var b = array[1];
// // var c = array[2];
// var [a,b, ...rest] = array;

// console.log(a);
// console.log(rest);

// Object
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    // description: 'description value'
};
var {name, description='default '} = course;

console.log(name);
console.log(description);


//----------------------------------------------------------------
// function logger(...log) {
//     console.log(log);


// }
// console.log(logger(1,2,3,4,5,6,7,8,9,10));