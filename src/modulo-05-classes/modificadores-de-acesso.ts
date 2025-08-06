export {};
// Ex 01 - modificador public
class Estudante {
    nome: string;
    public idade: number;
}

const estudante = new Estudante();
estudante.nome = 'João';
estudante.idade = 20; // Atributo público pode ser acessado diretamente
//console.log(estudante.nome, estudante.idade);

//Ex 02 - modificador private
class EstudantePrivado {
    nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    retornaDadosEstudante() {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }

}

const estudantePrivado = new EstudantePrivado('Maria', 21);
//console.log(estudantePrivado.retornaDadosEstudante());
// estudantePrivado.idade = 22; // Atributo privado não pode ser acessado diretamente
// console.log(estudantePrivado.nome, estudantePrivado.idade); //
// Para acessar o atributo privado, seria necessário um método público na classe
// que retorne a idade, por exemplo:

// Ex 03 - modificador protected
class EstudanteProtegido {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Aluno extends EstudanteProtegido {
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        // propriedades da classe pai
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }

    retornaDadosAluno() {
        return `Código: ${this.codigoEstudante}, Nome: ${this.nomeEstudante}, Curso: ${this.curso}`;
    }
}

const aluno = new Aluno(123, 'Carlos', 'Engenharia');
console.log(aluno.retornaDadosAluno());
// Ex 04 - modificador readonly