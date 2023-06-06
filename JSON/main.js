// 1. Event listener --> OK
// 2. JSON
//--------- Promise
// - Sync
// - Async
// - Nỗi đau
// - Lý thuyết
// - Thực hành, ví dụ

// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practice
// 9. Mistakes
// 10. Performance

// 1 . Là một định dạng dữ liệu (Chuỗi)
// 2 . JavaScript Object Notation
// 3 . JSON: Number, String, Boolean, Null, Array, Object

// Mã hóa / Giải mã
// Encode / Decode
// Stringify : Tu JS sang JSON
// Parse : Tu JSON sang JS

// var json = '["Javascript","PHP"]';
// var json = '{"name";"Nghia Nguyen","age":18}';

// var a = '["Js","PHP"]';
// console.log(JSON.parse(a));

// var json = '{"name":"Nghia Nguyen","age":18}';
// var obj = JSON.parse(json);
// console.log(obj);

// console.log(JSON.stringify([
//     'Javascript',
//     'PHP'
// ]));

// console.log(JSON.stringify({
//     name: 'Nghia Nguyen',
//     age: 18,

// }));

// Sync/ Async

// setTimeout, setInterval, fetch, XMLHttpRequest, file reading
// request animation frame

// Callback 

// sleep
// setTimeout(function() {
//     console.log(1);
// }, 1000);

// console.log(2);

// Callback hell
// Pyramid of doom

// 1. new Promise
// 2. Executor

// Memory leak

// 1. Pending
// 2. Fulfille
// 3. Reject

// var promise = new Promise(
//     // Executor
//     function(resolve, reject){
//         // Logic    
//         // Thành công: resolve()
//         // Thất bại: reject()

//         //Fake call API

//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'Javascript'

//         //     }
//         // ]);
//         // reject('Co loi');

//         resolve();

//     }
// );

// // Chain

// promise
//     .then(function(){
//       return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve([1,2,3]);
//         },3000);
//       });
//     })
//     .then(function(data){
//         console.log(data);
       
//      })
//     .catch(function(fail){
//        console.log(fail);
//     })
//     .finally(function(){
//        console.log('Done');
//     });


// function sleep(ms){
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// sleep(1000)
//    .then(function(){
//          console.log(1);
//          return sleep(1000);
//    })
//    .then(function(){
//     console.log(2);
//     return new Promise(function(resolve, reject){
//          reject('Co loi');
//     });
// })
// .then(function(){
//     console.log(3);
//     return sleep(1000);
// })
// .catch(function(error){
//     console.log(error);
// })

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// Thư viện : output luôn luôn là Promise
// Một promise

// var promise = Promise.reject('Error');
// promise
//     .then(function(result){
//        console.log(result);
//     })
//     .catch(function(error){
//         console.log(error);
//     })

var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1]);
    }, 2000);
});
var promise2 = Promise.reject('Error')

Promise.all([promise1, promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
    .catch(function(error){
        console.log(error);
    });