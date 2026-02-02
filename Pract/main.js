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
//=============================================
console.log('№6')
const VideoSetting = {
    Graphic: 'Medium',
    Moution_blur: 'on',
    Render: 'FXAA'
}
const AudioSetting = {
    Voice_chat: 80,
    Game: 60
}
console.log(Object.assign(VideoSetting,AudioSetting))
//=============================================
console.log('№7')
const person = {
    Name:'Вадим',
    Age: 19,
    sayHello: function(){
        return 'Здравствуйте, я ' + this.Name
    }
}
console.log(person.sayHello())
//=============================================
console.log('№8')
//=============================================
console.log('№9')
const counter = {
    count: 1,
    increment: function() {
        this.count++;
        return this;
    },
    decrement: function() {
        if (this.count > 0) {
            this.count--;
        }
        return this;
    },
    reset: function() {
        this.count = 0;
        return this;
    }
};

console.log(counter.count); 
counter.increment();
console.log(counter.count); 
counter.decrement();
console.log(counter.count); 
counter.reset();
console.log(counter.count); 
//=============================================
console.log('№10')
const product = {
    price:100,
    applyDiscount: function(percent) {

        if (percent < 0 || percent > 100) {
            console.log('Процент скидки не может быть больше 100');
        }
        

        const discountAmount = this.price * (percent / 100);
        

        this.price -= discountAmount;
        
        return this.price;
    }
};


console.log('Исходная цена:', product.price);  
product.applyDiscount(10);  
console.log('Цена после скидки:', product.price); 
