"use strict";
let getInfoUser;
getInfoUser = {
    nome: "####",
    idade: 27,
    maior: true,
    estado: "solteiro"
};
const printUser = (user) => {
    console.log(user.nome);
    console.log(user.idade);
    console.log(user.maior);
    console.log(user.estado);
};
printUser(getInfoUser);
