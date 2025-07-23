
// ex 01: funçoes:
function logError(errorMessage: string) {
    console.log(errorMessage)
    //return errosMessage
}

logError('Error')

// Ex 02: Arrow Function:
const errorLogExample02 = (errorMessage: string) => {
console.log(errorMessage)
}

errorLogExample02('Teste feito!')

// Ex 03: Uso do void em variáveis
let variavelVoid: void;
//variavelVoid = 1;
variavelVoid = null;
variavelVoid = undefined;

console.log(variavelVoid)