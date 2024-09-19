const readline = require('readline-sync');

function countLettersA(str) {
    // Inicializa os contadores
    let countLowerA = 0;
    let countUpperA = 0;

    // Percorre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            countLowerA++;
        } else if (str[i] === 'A') {
            countUpperA++;
        }
    }

    // Verifica se a letra 'a' foi encontrada e imprime o resultado
    if (countLowerA > 0 || countUpperA > 0) {
        console.log(`A letra 'a' minúscula aparece ${countLowerA} vezes na string.`);
        console.log(`A letra 'A' maiúscula aparece ${countUpperA} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// Pergunta ao usuário se deseja informar a string pelo terminal ou usar uma predefinida
let choice = readline.question("Você deseja informar a string pelo terminal? (s/n): ").toLowerCase();

let inputString;

if (choice === 's') {
    // Captura a string informada pelo usuário
    inputString = readline.question("Informe a string: ");
} else {
    // Usa uma string predefinida
    inputString = "Amazônia é uma região incrível!";
}

// Chama a função para contar as ocorrências da letra 'a'
countLettersA(inputString);
