//Contrato onde especifico todos os atributos que um determinado projeto precisa ter!
//Pode ser usado como um tipo em outras variaveis!
interface User {
    nome: string;
    idade: number;
    maior: boolean;
    estado: "casado" | "solteiro"
}

let getInfoUser: User;

getInfoUser = {
    nome: "####",
    idade: 27,
    maior: true,
    estado: "solteiro"
}

const printUser = (user:User) => {
    console.log(user.nome)
    console.log(user.idade)
    console.log(user.maior)
    console.log(user.estado)
};

printUser(getInfoUser);