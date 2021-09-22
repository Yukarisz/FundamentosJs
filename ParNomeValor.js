// par / nome / valor 
const saudacao = "opa" //contexto lexico  e o local em qual a sua variavel foi definida fisicamente no seu codigo

function exec () {
    const saudacao = "falaa" //contexto lexico 2
    return saudacao
}

 
//objetos sao grupos aninhados de pares nome/ valor

const cliente = {
    nome: "pedro" , 
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "rua muito legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
