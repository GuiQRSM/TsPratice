export {};

// Ex 01 - Default Parameters
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
}

//console.log(descontoCompra(100))

// Ex 02 - efault Parameters
function exinbriMensagen(nome: string, saudar = 'Olá, tudo bem') {
    return `${saudar} ${nome}`
}

//console.log(exinbriMensagen('Heitor'))

// Ex 03 - efault Parameters
function exibirNome(nome: string, sobrenome = 'Quaresma') {
    return `${nome} ${sobrenome}`
}

const resultado_1 = exibirNome('Guilherme')
const resultado_2 = exibirNome('Guilherme', undefined)

console.log(resultado_2)