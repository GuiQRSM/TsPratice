export {  }

// Ex 01: Uso de if
const numeroMax = 100;
let contador = 100;

if(contador < numeroMax) {
    contador++
}

//console.log(contador)


//// Ex 02: Uso de if

const agePermissionDrive = 15

if(agePermissionDrive >= 18) {
    //console.log('Já pode dirigir')
}else {
    //console.log('Não pode dirigir')
}

//Ex 03: Uso do if

let desconto: number

const itemContador = 8

if (itemContador > 0 && itemContador <= 5) {
    desconto = 5
} else if(itemContador > 6 && itemContador <= 10) {
    desconto = 10
} else {
    desconto = 15
}

//console.log(`Você obteve ${desconto}% de desconto!`)

// Ex 04: Ternário

const idadeVotacao = 17

const podeVotar = (idadeVotacao >= 18) ? 'Você já pode votar!' : 'Você não pode votar!'

console.log(podeVotar)
