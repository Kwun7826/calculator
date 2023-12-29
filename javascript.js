function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

let num1;
let num2;
let operator;

function operate(num1, num2){
    num1 = prompt('Choose a number');
    num2 = prompt('Choose a number');
    add(num1, num2);
}

