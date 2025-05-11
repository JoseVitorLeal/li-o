//função é um bloco de código que só será executado quando for chamado

/*
EXEMPLO 1


function mensagem() {
    alert("Seja bem-vindo(a)!");
    console.log("Seja bem-vindo(a)!");
}

mensagem();
*/

/*
EXEMPLO 2 - função com parâmetros


function somar(numero1, numero2) {
    alert(numero1 + numero2)
    console.log(numero1 + numero2)
    }
    
let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));
    
somar(n1, n2); //70
somar("14", 18);//32
*/

/*
EXEMPLO 3 - parâmetros de tipos diferentes
*/

function mensagemPessoal(nome, cargo, anosTrabalhados) {
    alert(`Seja bem-vindo(a) ${cargo} ${nome}. Estamos felizes por ter você trabalhando conosco há ${anosTrabalhados} anos.`)
}

mensagemPessoal("Lucas", "Gerente", 10)
mensagemPessoal("Irineu", "Você não sabe, nem eu", 50)

/*
EXEMPLO 4 - a return nas funções
*/

function somarEDevolver(numero1, numero2, numero3) {
    let resultado = numero1 + numero2 + numero3
    return resultado
}

// guardar numa variável ou guardar em qualquer lugar no código
let soma1 = somarEDevolver(10, 11, 12)
let soma2 = somarEDevolver(30, 40, 50)

alert(soma1)
alert(soma2)