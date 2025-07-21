// Ex 01 - Uso de Colchetes:
const frutas: string[] = ['maçã', 'banana', 'laranja'];

// Ex 02 - Array Object:
const frutas1: Array<string> = ['maçã', 'banana', 'laranja'];
//console.log(frutas1[2]);

// Ex 03 - Adicionando mais strings com método 'push':
const idiomas: Array<string> = ['português', 'inglês', 'espanhol'];
idiomas.push('francês', 'alemão');
//console.log(idiomas);

// Ex 04 - Identificar tamanho do array (método 'length'):
const idiomas1: Array<string> = ['português', 'inglês', 'espanhol'];
//console.log(idiomas1.length); // Saída: 3

// Ex 05 - Exemplo de Array com Spreed Operator:
const listNumeros: Array<number> = [1, 2, 3];
const listNumeros2: Array<number> = [...listNumeros, 4, 5, 6];
console.log(listNumeros2); // Saída: [1, 2, 3, 4, 5, 6]   

// Ex 06 - Exemplo deArray com laço de iteração:
const linguagenProgramacao: Array<string> = ['JavaScript', 'Python', 'Java', 'C#'];

function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagenProgramacao[i]);
    }
}

funcaoLinguagens(linguagenProgramacao); // Saída: JavaScript, Python, Java, C#


