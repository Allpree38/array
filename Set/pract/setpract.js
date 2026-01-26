//========================================
console.log("№1");
const emails = ['a@example.com', 'b@example.com', 'a@example.com', 'c@example.com'];
const oneEmail = [...new Set(emails)];
console.log(oneEmail);
//========================================
console.log("№2");
console.log("2 номер")
const visitorIPs = ['192.168.0.1', '192.168.0.2', '192.168.0.1', '192.168.0.3'];
const soloPers = [...new Set(visitorIPs)]
console.log(soloPers)
//========================================
console.log("№3");
const eventFirstPart = ['Иван', 'Мария', 'Петр'];
const eventSecondPart = ['Мария', 'Алексей', 'Иван'];
const all = [...eventFirstPart, ...eventSecondPart];
const unicPer = [...new Set(all)];
console.log(unicPer);
//========================================
console.log("№4");
const storeAItems = ['молоко', 'хлеб', 'масло'];
const storeBItems = ['хлеб', 'масло', 'сыр'];
const filt = storeAItems.filter(item => 
    storeBItems.includes(item)
);
console.log(filt); 
//========================================
console.log("№5");
const storeAItemss = ['молоко', 'хлеб', 'масло'];
const storeBItemss = ['хлеб', 'масло'];
const setB = new Set(storeBItemss);
const uniqueItems = storeAItems.filter(item => !setB.has(item));
console.log(uniqueItems); 
//========================================
console.log("№6");
const registeredUsers = ['Иван', 'Мария', 'Петр'];
const usernameToCheck = 'Алексей';
const userExists = registeredUsers.includes(usernameToCheck);
console.log(`Пользователь ${usernameToCheck} существует: ${userExists}`);
//========================================
console.log("№7");
const hashtags = ['#жара', '#отдых', '#жара', '#лето', '#отдых'];
const uniqueHashtags = [...new Set(hashtags)];
console.log(uniqueHashtags); 
//========================================
console.log("№8");
const allOptions = ['VIP', 'Standard', 'Economy'];
const userOptions = ['VIP', 'Standard'];
function hasAllOptions(arr1, arr2){
    if (arr1.length === arr2.length){
        return true
    }
    else{
        return false
    }
}
console.log(hasAllOptions(allOptions, userOptions))
//========================================
console.log("№9");
const stockItems = ['ноутбук', 'клава', 'мышь', 'монитор'];
const productToCheck = 'принтер';
const hasProduct = stockItems.includes(productToCheck);
console.log(`Продукт ${productToCheck} находится на складе: ${hasProduct}`);