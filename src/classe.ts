class People {
    nome:string;
    idade: number;

    aproach(nome:string) {
        console.log(`Olá ${nome}!`) 
    }

};

interface Testeuser {
    salario: number;
    comer(): void;
}

class Userpeople extends People implements Testeuser {
    salario: number;
    comer(): void {
        console.log("comendo...");
    }
};

const userPeople = new Userpeople();



