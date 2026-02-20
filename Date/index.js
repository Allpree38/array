//====================<Встроенные объекты JS>========================

const person = {
    name: 'Alex',
    age: 20,
    getAge: function(){
        return this.age
    },
    printName: function(){
        console.log(`Имя: ${this.name}`)
    },
    upAge: function(){
        this.age = this.age +1
    }
}
person.printName()

//====================<Дата | Date>========================

const dateNow = new Date();
console.log(dateNow)

const dateMy = new Date(1999, 11, 12);
console.log(dateMy)

//====================<Получение компонентов даны и времени>========================

console.log(dateNow.getFullYear())