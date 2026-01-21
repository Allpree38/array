//====================<Set / Мнжества>========================
//Set/множества - это структура данных, которая хранит уникальные значения

//Узнать уникальных посетителей сайта
//Управление разрешениями дуступа
//Удаление дубликатов из списка

//====================<Создание пустого множества>========================

// const mySet = new Set()

// const mySet = new Set([1,2,3,4,4,4,5,5])                       //Множество можно объеденить с массивом
// console.log(mySet)                                          //Множество выводит только уникальные элементы ([1,2,3,4,4,5,5]=>{1,2,3,4,5})

//====================<Методы>========================

// const mySet = new Set([1,2,3,4,4,4,5,5])                       //Множество можно объеденить с массивом
// mySet.add(7) //добавилость, т.к. новое уникальное значение     //add - добавление
// mySet.add(2) //не добавилось, т.к. такое уникальное значение уже есть
// console.log(mySet)
// 
// mySet.delete(2)                                //delete - удаление
// console.log(mySet)
// 
// console.log(mySet.has(200))          //has - проверяет наличие того или иного элемента выводя значение true или false соответственно
// console.log(mySet.has(4))
 
//====================<Свойства множества>========================

// const mySet = new Set([1,2,3,4,4,4,5,5])
// console.log(mySet.size)                   //size - выводит значение равное общему количеству УНИКАЛЬНЫХ элементов

// for (let item of mySet){
//     console.log(mySet)
// }

// mySet.forEach((item)=>{
//     console.log(item)
// })

//====================<Перевод множества в массив>========================

// Пример 1 Убрать из массива повторяющиеся элементы

const someMass = ['some1','some2','some3','some1']

function uniqueItem(arr){
    const uniqueItemSet(arr) = new Set(arr)
    return [...uniqueItemSet]
}

console.log(uniqueItem(someMass))

//Пример 2 Проверка уникальности массива

const array = [1,2,3,2,4,5,6,7]

function hasDoubles(arr){
    const set = new Set(arr)
    return set.size !== arr.lenght
}

console.log(hasDoubles(array))