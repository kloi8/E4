function optFunc(str, obj) {
    return str in obj;
}


const obj = {
    a: 1, 
    b: 2, 
    c: 3
};

let str1 = 'c';
let str2 = 'e';


console.log(optFunc(str1, obj));
console.log(optFunc(str2, obj));