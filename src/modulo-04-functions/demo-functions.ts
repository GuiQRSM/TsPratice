// Ex 01 - functions (name functions)
function somaNumreos(n1: number, n2: number): number {
    return n1 + n2
}

const results = somaNumreos(2,2)
/*console.log(results)*/

// Ex 02 - Função Anõnima (Function Expression)
const saudar = function (message: string) {
    return message;
};

/*console.log(saudar('Oi'))*/

// Ex 03 - Arroe function Expression
const saudarDeNovo = (saudar: string) => {
    return saudar;
}

const resultsUm = saudarDeNovo('Eaiiiii')
/*console.log(resultsUm)*/

// Ex 04 - Function constructor
const saudarMaisUmaVez = new Function('mensagem', 'return "Fala" + mensagem ');

console.log(saudarMaisUmaVez('Galera!'))