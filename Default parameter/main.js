// function logger1(log){
//     if(typeof log === 'undefined'){
//    log = 'Gia tri mac dinh'
// }
// console.log(log);
// }

// logger1();

//------

// function logger(log = 'Gia tri mac dinh'){
//     console.log(log);
// }
// logger();


function logger(log, isAlert){
    if(isAlert) return alert(log);
    console.log(log);
}
logger('Message',true);