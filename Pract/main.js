//=============================================
console.log('№1')
const car = {
    brand: 'lada',
    model: "2107",
    year: 2005,
    getAge: function (){
        return 2026 - (car.year)
    }
}
console.log(car.getAge())
//=============================================
console.log('№2')
const book = {
    pages: 618,
    author: 'kto to',
    name: 'knigga'
}
console.log(Object.keys(book))
console.log(Object.values(book))
//=============================================
console.log('№3')
const calculator = {
    a:20,
    b:10,
    add: function(){
        return calculator.a+calculator.b
    },
    subtract: function(){
        return calculator.a-calculator.b
    },
    multiply: function(){
        return calculator.a*calculator.b
    },
    divide: function(){
        return calculator.a/calculator.b
    }
}
console.log(calculator.add())
console.log(calculator.subtract())
console.log(calculator.multiply())
console.log(calculator.divide())
//=============================================
console.log('№4')
const user = {
    name : 'Иван', 
    age: 18,
    isStudent: true
}
console.log(Object.keys(user))
//=============================================
console.log('№5')
const student = {
    nameStud: 'Александр',
    ageStud: 20,
    grades:[5,4,3,5,5,4],
    newGrades: function(){
        return student.grades.push(5)
    }
}
console.log(student.newGrades())

