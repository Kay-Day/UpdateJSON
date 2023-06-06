// function Course (name,price){
//     this.name = name;
//     this.price = price;
//     this.getName = function(){
//         return this.name;
//     }
// }

class Course {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    };
    // run(){
    //     const isSuccess = false;
    //     if(){
    //         isSuccess = true;
    //     }
    // }

}
const php = new Course('PHP',1000);
const js = new Course('JS',1000);

console.log(php);
console.log(js);