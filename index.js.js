// //8 основных типов данных
// let numb = 20; //Number
// let bigIntnum = 8730648399889999999999n; //BigInt
// let str1 = 'Hello'; //String
// let variable = true; //Boolean
// let empty = null; //null
// let test; //undefined
// let user = {id:1, firstName: 'Alex'}; //object
// let sym = Symbol(); //Symbol


/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
let city = "tyumen";
console.log(city);
let country = "russia";
console.log(country);
let population = 800000;
console.log(population);
let footballStadium = true;
// let nullType = null;
// console.log(footballStadium);
// console.log(typeof footballStadium);
// console.log(typeof nullType);

// let user = {
//     id: 1,
//     firstName: "Alex",
//     age: 22
// }
 
/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
let heightOfRectangle = 40;
let widthOfRectangle = 70;
let areaOfRectangle = heightOfRectangle * widthOfRectangle;
console.log(areaOfRectangle);
/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
let distance = (time * speedOfFirst) + (time * speedOfSecond);
console.log(distance);


/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
    
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50"); 
} else { 
    console.log("randomNumber больше или равен 20, и меньше или равен 50");
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

const randomNumberSwithCase = Math.floor(Math.random() * 100);

switch (true) {
    case randomNumberSwithCase < 20:
        console.log("randomNumberSwithCase меньше 20");
        break;

    case randomNumberSwithCase > 50:
        console.log("randomNumberSwithCase больше 50");
        break;

    default:
        console.log("randomNumberSwithCase больше или равен 20, и меньше или равен 50");
        break;
}


// const = 'Alex',
//     colors = ["green", 'blue', 'red', 'black'],
//     user = {
//     id: 1,
//         firstName: 'Sergey'
//     },
//     printName = () => {
//     console.log('Hello');
//     }

// let maxNumb = Number.MAX_SAFE_INTEGER;
// console.log(maxNumb);
// let bigIntNumb = 900719925474099176n;
// console.log(bigIntNumb);


// const color = red;

// switch(color) {
// case 'green':
//     console.log("Этот цвет зеленый");
//     break;
// }