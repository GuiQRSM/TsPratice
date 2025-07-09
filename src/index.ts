import { DoStatement } from "typescript";

//Declaração de tipagem para array!
const conj: string[] = []
conj.push("'test1")
conj.push("'test2")

//Declaração de tipagem para dupla!
const pf: [string, number] = ["gfrtdg", 123]

function sum(a: number, b: number) {
    return a + b;
};

const aproach = (name:string):void => {
    console.log(`Nice to meet you/ ${name}!`);
};

//aproach("Guilherme") ;

//console.log(sum(23,67))