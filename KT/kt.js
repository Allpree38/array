//=============================================
console.log('№1')
const employees = [
    { name: 'Анна', salary: 60000 },
    { name: 'Игорь', salary: 80000 },
    { name: 'Лена', salary: 55000 },
    { name: 'Дмитрий', salary: 90000 },
    { name: 'Ольга', salary: 65000 }
];
const middleSalary = employees.reduce((acc, item)=>{return acc + item.salary}, 0) / employees.length;
console.log(`Средняя зарплата ${middleSalary}`)
const hightSalary = []
employees.forEach(item => {
    if (item.salary > middleSalary) {
        hightSalary.push(item)
    }
})
console.log(...hightSalary)
//=============================================
console.log('№2')
const projects = [
    { name: 'Проект A', techs: ['React', 'Node.js', 'MongoDB'] },
    { name: 'Проект B', techs: ['Angular', 'Node.js', 'MySQL'] },
    { name: 'Проект C', techs: ['React', 'PostgreSQL'] }
  ];

const uniqueTechs = projects.reduce((acc, p) => {
    p.techs.forEach(techs => { if (!acc.includes(techs)) acc.push(techs); });
    return acc;
  }, []);
console.log(uniqueTechs);
//=============================================
console.log('№3')
const team = [
    { name: 'Петр', tasksCompleted: 25 },
    { name: 'Анна', tasksCompleted: 30 },
    { name: 'Михаил', tasksCompleted: 20 }
  ];
let allTasks = 0
for (let i = 0; i < team.length; i++) {
    allTasks += team[i].tasksCompleted;
}
console.log(allTasks)
//=============================================
console.log('№4')
const users = [
    { name: 'Алекс', age: 24 },
    { name: 'Катя', age: 19 },
    { name: 'Владимир', age: 31 },
    { name: 'Лена', age: 22 },
    { name: 'Саша', age: 20 }
  ];
//=============================================
console.log('№5')
const clients = [
    { name: 'Виктория', email: 'victoria@example.com' },
    { name: 'Михаил', email: 'mikhail@example.com' },
    { name: 'Антон', email: 'admin@example.com' }
  ];
let cipClient = false
for (let i = 0; i < clients.length; i++) {
    if (clients[i].email === 'admin@example.com') {
        cipClient = true
        break
    }
}
console.log(cipClient)
  //=============================================
console.log('№6')
const stock = [
    { name: 'Мяч', quantity: 12 },
    { name: 'Кубик', quantity: 5 },
    { name: 'Ручка', quantity: 20 }
  ];
const result = stock.reduce((acc, item)=>{ acc[item.name] = {quantity: item.quantity}; return acc}, {})
console.log(result)