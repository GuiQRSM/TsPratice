"use strict";
class People {
    aproach(nome) {
        console.log(`Olá ${nome}!`);
    }
}
;
class Userpeople extends People {
    comer() {
        console.log("comendo...");
    }
}
;
const userPeople = new Userpeople();
