// // let UserName1 = "Степан";
// // let UserAge1 = 19;

// // let UserName2 = "Александр";
// // let UserAge2 = 35;

// // ===================<<Массивы | Array>>==========================

// const Empty = [];
// const Namber = [1,2,3,4,5,6,7,8,9];
// const Mixed = [1, "hello",true, null];
// const User1 = ["Степан", 19, "Програмист"];     

// console.log(User1[2])
// console.log(User1[1])

// // ===================<<Длина массива>>==========================

// console.log(User1.length)
// console.log(Mixed.length)

// ===================<<Пребор элементов массива>>==========================

// for (let item in Mixed){                // for - цикл
//     console.log(item)
// }

// for (let item of Mixed){
//     console.log(item)
// }

// ===================<<Методы массивов>>==========================
// Метод - это функция, которая принадлежит некому объекту

// Math.sqrt()

// random.randit

// function hello(){
//     console.log("hello")
// }

// const arr =[1,2,3];
// arr.push(4,5)                          //push - добавляет элементы в конец массива
// console.log(arr)

// const arr =[1,2,3];
// arr.unshift(4,5)                          //unshift - добавляет элементы в начало массива
// console.log(arr)

// const arr =[1,2,3];
// arr.pop()                          //pop - удаляет один элемент в конце массива
// console.log(arr)

// const arr =[1,2,3];
// arr.shift(4,5)                          //shift - удаляет один элемент в начале массива и возвращает удалённый элемент?
// console.log(arr)

// const arr =[1,2,3,4,5,6];
// console.log(arr.slice(2))                     //slice - обрезает эелементы с заданого включительно
// console.log(arr.slice(3,5))

// splice(start, deleteCount)                      //start - индекс начала   deleteCont - сколько элементов
// splice(start, deleteCount, newItem)             //newItem - то на что заменится что то (я пока не понял что)

// const programming = ["C++", "Python", "JS", "Go"];
// programming.splice(1,2)
// console.log(programming)

// ===================<<Объединение массивов>>==========================

//  const a = [1,2];
//  const b = [3,4];

// // console.log(a+b)                         //(a+b) - не корректное объединение массивов 
// console.log(a.concat(b));                   //concat - корректное объединение массивов

// ===================<<Поиск в массивe>>==========================

//  const a = [1,2];
//  const b = [3,4];
// console.log(a.indexOf(1))                   //indexOf() - находит индекс элемента в начале массива, в случае если элемента в массиве нет то вывод будет -1   

//  const a = [1,2,0,4,1,0]
//  console.log(a.lastIndexOfindexOf(4))          //lastIndexOf - находит индекс элемента в конце массива

// const a = [1,2,0,4,1,0]
// console.log(a.includes(4))                        //includes() - проверяет наличие элемента в массиве

// const ab = ["programmer", "am", "I"]
// console.log(ab.reverse())                           //reverse() - реверсирует массив и меняет его

const a = [1,2,0,4,1,0]
const b = ["т","п","в","а"]
console.log(b.sort())                              //sort - сортировка массива по остатку, изменяет массив
console.log(a.sort())

