const name = prompt("Здравствуйте, как вас зовут?")
alert("Привет " + name + "!")

let a = [1, 2, 3]
let b = [4, 5, 6, 7, 8]
console.log(a, b)
console.log(a.length, b.length)
if (a.length > b.length) {
    alert("a is bigger")
    console.log("a is bigger")
}
else if (a.length < b.length) {
    alert("b is bigger")
    console.log("b is bigger")
}
else if (a.length === b.length) {
    alert("They are equals")
    console.log("They are equals")
}
else {
    alert("Error")
    console.log("Error")
}