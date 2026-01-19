console.log("№1");
const a = [1,5,3,6,2,8];
console.log(a.sort().reverse()[1])
//========================================
console.log("№2");
function check(arr){  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return true
        }
    }
    return false
}
console.log(check([3,6,6,4,9,8]))
console.log(check([1,6,4,3,5,8]))
//========================================
console.log("№3");
function calc1(arr){
    let x = 0
    for (let i = 0; i < arr.length; i++ ) {
        if (i % 2 != 0) {
            x = x +arr[i]
        }
    }
    return x
}
console.log(calc1([1,5,3,6,2,8]))
//========================================
console.log("№4");
function simm(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(simm([1,2,3,4,3,2,1])); 
//========================================
console.log("№5");
function wrongMass(arr){
    return [...new Set(arr)]
}
console.log(wrongMass([1, 2, 2, 3, 4, 4]))
//========================================
console.log("№6");
const numb = [-1, -4, 7, -2, 8, 10];
let goodNumb = [];
let notGoodNumb = [];
for (let i of numb){
    if (i > 0) {
        goodNumb.push(i);
    } 
    else {
        notGoodNumb.push(i);
    }
} 
console.log([goodNumb, notGoodNumb]);
//========================================
console.log("№7");
const arr1 = [1,2,3]
const arr2 = [4,5,6]
console.log(arr1.concat(arr2))
//========================================
console.log("№8");
function krtn(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 5 === 0){
            return true
        } 
    }
}
console.log(krtn([3,5,2,6,4]))
//========================================
console.log("№9");
const arrNine = [1,2,3,4]
let newArrNine = []
//========================================
console.log("№10");