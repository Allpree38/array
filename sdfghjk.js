// filter - Когда нам надо получить массив с частью исходных эл-ов
// map -    Когда нам надо получить массив изменив каждый элемент 
// reduce - Когда нам нужно получить из массива другой тип данных (число, строку, объект)
//forEach  - Когда нам надо пербрать эл-ты массива




// Задача 1: Создать объект по ID пользователей
// Дан массив пользователей, каждому назначен уникальный ID. Нужно сделать объект, где ключ — это ID, а значение — сам пользователь.



// const users = [
//     { id: 101, name: 'Анатолий', age: 30 },
//     { id: 102, name: 'Юлия', age: 25 },
//     { id: 103, name: 'Игорь', age: 35 }
//   ];
// const result = users.reduce((acc, item)=>{ acc[item.id] = {name: item.name, age:item.age}; return acc}, {})
// console.log(result)

//Задача 3: Создать список групп по статусу заказа
//Даны заказы с разными статусами. Нужно сгруппировать заказы по статусам в объект.


const orders = [
  { orderId: 1, status: 'Обрабатывается' },
  { orderId: 2, status: 'Доставлен' },
  { orderId: 3, status: 'Обрабатывается' },
  { orderId: 4, status: 'Отменён' }
];

const result_1 = orders.reduce((acc, item)=>{ acc[item.orderId] = {status: item.status}; return acc}, {})
const result_2 = orders.reduce((acc, item)=>{ acc[item.orderId] = {status: item.status}; return acc}, {})
const result_3 = orders.reduce((acc, item)=>{ acc[item.orderId] = {status: item.status}; return acc}, {})
function sortId () {
    if (orders.status = 'Обрабатывается') {
        return 
    }
    
}
console.log(result_1)
console.log(result_2)
console.log(result_3)