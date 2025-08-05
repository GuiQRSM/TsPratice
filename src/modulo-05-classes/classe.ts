class Pessoas {
    //fields: atributos ou propriedades
    nome: string
    sobrenome: string

    //constructor: método especial que inicia a classe
    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    //methods: funções da classe
    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

}

//instanciar a classe
const pessoas = new Pessoas('Luiz', 'Otávio')
//console.log(pessoas.nomeCompleto())

//Ex 02 - classe sem construtor
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

//instanciar a classe Estudante
const estudante = new Estudante();

//atribuir valores aos atributos da classe Estudante
estudante.codigoEstudante = 1;
estudante.nomeEstudante = 'João';

//imprimir os valores
//console.log(estudante.codigoEstudante, estudante.nomeEstudante);

//Ex 02 - classe com construtor
class Estudante2 {
    codigoEstudante: number;
    nomeEstudante: string;

    //constructor: método especial que inicia a classe
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    //methods: funções da classe
    listarEstudante(): void {
        console.log(`Código: ${this.codigoEstudante}, Nome: ${this.nomeEstudante}`);
    }
}
//instanciar a classe Estudante2
const estudante2 = new Estudante2(2856, 'Maria');
console.log(estudante2);