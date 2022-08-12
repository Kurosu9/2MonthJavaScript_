// 1.1:
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm("Родители разрешили?");
//     }
// }
// checkAge(19)

let age = prompt("Укажите возраст?")
let checkAge = (age > 18) ? () => true : () => confirm("Родители разрешили?")
checkAge()

// 1.2:
// let a = 3;
// let b = 2;
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
// console.log(result)

let a = 1;
let b = 2;
let result = (a + b < 4) ? () => alert("Мало") : () => alert("Много")
result()

// 1.3:
// let message;
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let login = prompt("Введите логин:")
let message = (login === "Сотрудник") ? () => alert("Привет") : (login === "Директор") ? () => alert("Здравствуйте") : (login === "") ? () => alert("Нет логина") : alert("")
message()


// 2.1:
if (a > 0) {
    let ggg = function() {
        console.log("!");
    }
} else {
    let ggg = function() {
        console.log("!!");
    }
}

// 2.2
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(elements.map(function (element) {
    return element.length
}));

// 2.3:
console.log(elements.map((element) => element.length));