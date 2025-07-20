// Ex 01 - Uso de Colchetes:
let frutas: string[] = ['maçã', 'banana', 'laranja'];

// Ex 02 - Array Object:
let frutas1: Array<string> = ['maçã', 'banana', 'laranja'];
//console.log(frutas1[2]);

// Ex 03 - Adicionando mais strings com método 'push':
let idiomas: Array<string> = ['português', 'inglês', 'espanhol'];
idiomas.push('francês', 'alemão');
//console.log(idiomas);

// Ex 04 - Identificar tamanho do array (método 'length'):
let idiomas1: Array<string> = ['português', 'inglês', 'espanhol'];
//console.log(idiomas1.length); // Saída: 3

// Ex 05 - Exemplo de Array com Spreed Operator:
let listNumeros: Array<number> = [1, 2, 3];
let listNumeros2: Array<number> = [...listNumeros, 4, 5, 6];
console.log(listNumeros2); // Saída: [1, 2, 3, 4, 5, 6]   

// Ex 06 - Exemplo deArray com laço de iteração:
let linguagenProgramacao: Array<string> = new Array('JavaScript', 'Python', 'Java', 'C#');

function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagenProgramacao[i]);
    }
}

funcaoLinguagens(linguagenProgramacao); // Saída: JavaScript, Python, Java, C#


