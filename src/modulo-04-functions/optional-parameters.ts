// Ex 01 - Optonal Parameters

function informarDadosPessoas(idPessoa: number, nome: string, email?: string ) {
    console.log('Id Funcionário...:', idPessoa, 'Nome...:', nome)

    if (email !== undefined) {
        //console.log('Email...:', email)
    }
}

informarDadosPessoas(1, 'João da Silva')

// Ex 02
function mensagenLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString()

    //console.log(horaLog, mensagem, usuarioId || 'Usuário não identificado')
}

mensagenLog('Atualiazar pagina')
mensagenLog('Usuario Logado', 12345)

// Ex 03

type Pessoa = {
    id: number;
    nome: string;
    idade?: number;
    email?: string; 
}

const pessoa: Pessoa = {
    id: 1,
    nome: 'João da Silva',
    idade: 30,
    email: 'xK0yO@example.com'
}

console.log(pessoa)
