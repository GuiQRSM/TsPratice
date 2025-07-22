// Ex 01: Tipo Any
const a: any = 23;
const b: any = ['Guilherme']

const resul = a + b;
console.log(resul)

// Ex 02: Quando o tipo 'any' e inferido implicitamnete
let frase;
//frase = 'Oi, tudo bem?'

// Ex 03: Quando devemos usar o tipo any?
const formulario: { [campoFormulario: string]: any } = {
    nome: 'Guilherme',
    sobrenome: '####',
    idade: 23,
}