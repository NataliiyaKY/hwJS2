//===============================================Масиви та об'єкти====================================================:


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const array1 = [1, 2, 3, true, false, 'ola', 4.3, {pop: 10, ol: 11}, 10, [11, 12]]

console.log(array1[0])
console.log(array1[1])
console.log(array1[2])
console.log(array1[3])
console.log(array1[4])
console.log(array1[5])
console.log(array1[6])
console.log(array1[7])
console.log(array1[8])
console.log(array1[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'Griffini',
    pageCount: 5,
    genre: 'comedy'
}

const book2 = {
    title: 'Rik i Morty',
    pageCount: 50,
    genre: 'fantasy'
}

const book3 = {
    title: 'South Park',
    pageCount: 500,
    genre: 'horror'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

const book4 = {
    title: 'Griffini',
    pageCount: 5,
    genre: 'comedy',
    authors: ['Petrov', 15]
}

const book5 = {
    title: 'Rik i Morty',
    pageCount: 50,
    genre: 'fantasy',
    authors: ['Ivanov', 25]
}

const book6 = {
    title: 'South Park',
    pageCount: 500,
    genre: 'horror',
    authors: ['Krilov', 35]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

const users = [
    {name: 'user1', username: 'username1', password: 101},
    {name: 'user2', username: 'username2', password: 102},
    {name: 'user3', username: 'username3', password: 103},
    {name: 'user4', username: 'username4', password: 104},
    {name: 'user5', username: 'username5', password: 105},
    {name: 'user6', username: 'username6', password: 106},
    {name: 'user7', username: 'username7', password: 107},
    {name: 'user8', username: 'username8', password: 108},
    {name: 'user9', username: 'username9', password: 109},
    {name: 'user10', username: 'username0', password: 110},
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


//=============================================Логічні розгалуження====================================================:


// - Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 15

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

const a1 = 1

if (a1 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

const a2 = 0

if (a2 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

const a3 = -3

if (a3 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 1

if (time <= 15 && time >= 0) {
    console.log('в першу')
} else if (time <= 30 && time > 15) {
    console.log('в другу')
} else if (time <= 45 && time > 30) {
    console.log('в третю')
} else if (time <= 59 && time > 45) {
    console.log('в четверту')
} else {
    console.log('невірний формат')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

const day = 32

if (day <= 10 && day >= 1) {
    console.log('в першу')
} else if (day <= 20 && day > 10) {
    console.log('в другу')
} else if (day <= 31 && day > 20) {
    console.log('в третю')
} else {
    console.log('невірний формат')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const dayNum = 5

switch (dayNum) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('incorrect number')
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


const num1 = 1000
const num2 = 100

if (num1 === num2) {
    console.log('рівні числа')
} else if (num1 > num2) {
    console.log(`${num1} - максимальне число`)
} else {
    console.log(`${num2} - максимальне число`)
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)

let X = 0 || 'default'


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}








