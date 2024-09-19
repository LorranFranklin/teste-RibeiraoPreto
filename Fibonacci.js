const readline = require('readline-sync');

function isPerfectSquare(x) {
    let s = Math.floor(Math.sqrt(x));
    return s * s === x;
}

function isFibonacciNumber(n) {
    // Um número é da sequência de Fibonacci se e somente se um ou ambos (5*n^2 + 4) ou (5*n^2 - 4) forem quadrados perfeitos
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// Número de entrada
let number = parseInt(readline.question("Informe um número: "));

// Verifica se o número está na sequência de Fibonacci
if (isFibonacciNumber(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}

