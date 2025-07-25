import { createLogicalAnd } from "typescript";

// Ex 01: Nerver - Throw Exception
function error(message: string): never {
    throw new Error(message);
}

console.log(error("This is an error message"));

// Ex 02: Never inferido automaticamente
function rejectMessage() {
    return error("This function always throws an error");
}

//console.log(rejectMessage());
