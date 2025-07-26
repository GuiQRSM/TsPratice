export {};
// Ex 01: Básico do uso do Type Object
const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    profissao: 'Engenheiro',
};

console.log(pessoa);

//Ex 02 - Object como parâmetro de função (eles podem ser anônimos)
function onboarding01(funcioario: {nome: string}) {
return `Seja bem vindo ${funcioario}`;
}

console.log(onboarding01({nome: 'João'}));

// Exd 03 - object nomeado
interface Pessoa {
    nome: string;
    profissao: string;
}

function onboarding02(pessoa: Pessoa) {
    return `Seja bem vindo ${pessoa.nome}, sua profissão é ${pessoa.profissao}`;
}

//console.log(onboarding02({nome: 'Maria', profissao: 'Desenvolvedora'}));

//Ex 04 = objext  como type alias
type Pessoa04 = {
    nome: string;
    funcao: string;
    linguagem: string;
};

function onboarding03(pessoa: Pessoa04) {
    return `Seja bem vindo ${pessoa.nome}, sua função é ${pessoa.funcao} e você trabalha com ${pessoa.linguagem}`;
}

//console.log(onboarding03({nome: 'Ana', funcao: 'Gerente', linguagem: 'JavaScript'}));

// Ex 05 - usando optional no object
interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string; // Propriedade opcional
}

function onboarding04(pessoa: Pessoa05) {
    return `Seja bem vindo ${pessoa.nome}, sua função é ${pessoa.funcao} e você trabalha com ${pessoa.linguagem}${pessoa.email ? `, seu email é ${pessoa.email}` : ''}`;
}

console.log(onboarding04({nome: 'Ana', funcao: 'Gerente', linguagem: 'JavaScript', email: 'bLr7o@example.com'}));