function plus (a, b) {
    return a + b;
}

function subs (a, b) {
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function divi(a, b) {
    if (b == 0) {
         console.log("Error");
    } else
    return a / b;
}

var operations = {
    '+': plus,
    '-': subs,
    '*': mult,
    '/': divi
}

var calculate = function(a, b, operation){
   return operations[operation](a, b);
}

console.log(calculate(12,4, '/'));
