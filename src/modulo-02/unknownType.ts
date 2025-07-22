// Ex 01: Tipo Unknown
let valor: unknown;

valor = 25;
valor = [];
valor = true;
valor = "#######";

console.log(valor)

// Ex 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
let teste: unknown;

//const teste1: boolean = teste;

// Ex 03: diferença entre 'any' vc 'unknown'
let someThingAny: any;
let someThingUnknown: unknown;

console.log(someThingAny.tofixed(2))
console.log(someThingUnknown.tofixed(2))