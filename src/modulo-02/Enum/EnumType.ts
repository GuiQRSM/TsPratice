// Ex 01 - Enum Numérico:
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}
//console.log(Idioma)

// Ex 02 - String Enums:
enum Semana {
    Segunda = 'SEG',
    terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

//console.log(Semana)


// Ex 03 - Como podemos acessar um valor de um Enum com uma chave: (usamdo o comst):
const enum Comida {
    Hamburguer = 'Hamburguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
}

function comida(c: Comida) {
    return 'Comida boa!'
}

//console.log(comida(Comida.Pizza))
//console.log(comida(Comida.Massa))


// Ex 04 - Quando usar enum?
enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descrecao: 'Tarefa concluida com sucesso'
}

if(concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar notificação via e-mail')
}