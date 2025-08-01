export {};
// Ex 01:
function somarNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero))

    return total;
}

//console.log(somarNumeros(30, 50))
//console.log(somarNumeros(70, 30, 50, 20))

// Ex 02:
function listarFrutas(frase: string, ...frutas: string[]) {
    return `${frase}: ${frutas.join(',')}`
}

/*console.log(listarFrutas(
    'Guilherme, vá à feira e compre essas frutas quwe estão na lista...:',
    'coco',
    'morango',
    'banana',
    'abacaxi',
),);*/

// Ex 03:

class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto)
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();

console.log('Todos os produtos do dep de informatica:', );

departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'Usb', 'Teclaco', 'Webcam')