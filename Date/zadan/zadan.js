const birthDate = new Date(1990, 4, 15, 0, 0, 0)
function happyBirthday(personBirthDate){
    const today = new Date()
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const nextBirthday = new Date(today.getFullYear(), personBirthDate.getMonth(), personBirthDate.getDate());
    if (nextBirthday < currentDate){nextBirthday.setFullYear(today.getFullYear() + 1)}
    if (currentDate.getTime() === new Date(today.getFullYear(), personBirthDate.getMonth(), personBirthDate.getDate()).getTime()){
        console.log("С ДЫРЫ ДРУК!");
        return;
    }
    const milliseconds = nextBirthday - currentDate;
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))
    const hours = Math.floor(milliseconds % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let message = 'До др осталось: ';
    if (days > 0) {
        message += ${days} Дней 
    }
    if (hours > 0 || days > 0){
        message += ${hours} Часов
    }
    console.log(message)
}
console.log(happyBirthday(birthDate))


const startWork = new Date(2024, 1, 15, 9, 0, 0);
const endWork = new Date(2024, 1, 15, 17, 45, 0);
function workTime(start, end){
        const w1 = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes());
    const w2 = new Date(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes());
    const miliseconds = w2 - w1;
    const hours = Math.floor(miliseconds / (1000 × 60 × 60))
    const message = `Работа заняла ${hours} часов`
    console.log(message)
}

console.log(workTime(startWork, endWork))


const subscriptionEndDate = new Date(2026, 6, 12, 0, 0, 0)
function subscription(Date1){
    const today = new Date(2026, 6, 12, 0, 0, 0);
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (currentDate.getTime() === Date1.getTime()){
        Date1.setMonth(today.getMonth() + 1)
        return Date1
    }
    console.log(Date1)
}
console.log(subscription(subscriptionEndDate))


const meetingDate = new Date(2024, 1, 18, 15, 30, 0);
function isPossible(Datte){
    const today = new Date();
    const milliseconds = Datte.getTime() - today.getTime();
    if (milliseconds > 0){
        return true
    }
    else{return false}
}
console.log(isPossible(meetingDate))