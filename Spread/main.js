// function logger([a,b,...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
   
// }
// logger([2,6,1,2,3]);


// Spread(...)
// var array = ['Java','PHP','Ruby'];
// var array2 = ['Javascript', 'C#'];
// var array3 = [...array, ...array2];
// console.log(array3);

// var object1 = {
//     name: 'Javascript'
// };
// var object2 = {
//     price: 1000
// };
// var object3 = {
//     ...object1,
//     ...object2,

// };
// console.log(object3);

// var defaultConfig = {
//     api: 'https://domain.com',
//     apiVersion: 'v1',
//     other: 'other'
// };
// var ex ={
//     ...defaultConfig,
//     api:"https://domain.com/api"
// };
// console.log(ex);


var array = ['Javascript', 'PHP', 'Ruby'];  
function logger(...rest) {
    for(var i = 0 ; i<rest.length; i++){
        console.log(rest[i]);
}
}
logger(...array);