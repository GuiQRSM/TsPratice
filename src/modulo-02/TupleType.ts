// Ex 03 - Outra forma de usar Tuplas em TypeScript (com labels):

import { createLanguageService } from "typescript";

//  Ex 04 - Usando Tuplas com Spread Operator:
const listaFrutas: [string, ...string[]] = ["abacaxi", "laranja", "maçã", "melancia", "morango"]
//console.log(...listaFrutas);

// Ex 05 - Lista Heterogênea de Tupla:

const listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
//console.log(listaFrutas2);


// Ex 06 - USo de função de Tupla:
function listarPessoas(nomes: string[], idade: number[]) {
    return [...nomes, ...idade]
}

const chamarPessoas = listarPessoas(["Guilherme", "Debora"], [23, 20])
//console.log(chamarPessoas)

// Ex 07 - Labeled Tuples com Spread Operator numa função:

type Nome = 
| [primeiroNome: string, sobrenome: string]
| [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa('Guilherme', 'Henrique'))
console.log(criarPessoa('Guilherme', 'Quaresma', 'Henrique'))
