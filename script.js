// Given two arguments, return an array which contains these two arguments.

function argArray(num1, num2){
    var newArr = []
    newArr.push(num1, num2)
    return "Heres your new array [" + newArr + "]"
}

console.log(argArray(12,25))