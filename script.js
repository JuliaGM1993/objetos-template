// Modelo de objeto

const meuObjeto = {
    chave1: 2, //Sempre separar os objetos com vírgula
    chave2: "string",
    chave3: true,
    chave4:[],
    // dadoUsuario: prompt("Digite seu nome")
}
meuObjeto.novaChave = "valor"
meuObjeto["novaChave"] = "valor"

//Exercício 1
const estudante = {
    nome:"Julia", //string
    sobrenome:"Guida",//string
    matricula: 1234, //aqui caberia string ou number
    notas:[10,8,5] //array de notas dentro do objeto
}

estudante.modulo = "Módulo 1" //Notação de ponto. Quando o objeto estiver dentro do escopo usamos ":", quando estiver fora atribuímos com "="
estudante["modulo"] = "Módulo 1"//Notação de colchete

//acessar as propriedasdes
console.log("estudante", estudante)
console.log(estudante.nome)
console.log("Segunda nota", estudante.notas[1])
console.log("Módulo", estudante.modulo)

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notas: [...estudante.notas, 9],//espelhamento feito no array do objeto
    modulo: "Módulo 2"
}

novoEstudante.notas.push(9)//adicionando mais um elemento ao array do objeto
console.log("novo estudante", novoEstudante)

//criar um array com os dois estudantes
const estudantesLabenu = [estudante]
estudantesLabenu.push(novoEstudante)
console.log(estudantesLabenu)

const carrinho = {
    nome: "João",
    formaPgto: "Dinheiro",
    endereço: "Rua dos bobos, nº 0",
    compras: [{item:"ovos", valor: 11.00, qtd: 12},{item:"batata", valor: 4.50, qtd: 8},{item: "miojo", valor: 3.00, qtd: 4}]
}

console.log(carrinho)

const carrinhoPresente = {
    ...carrinho,
    nome: "Gabriel",
    formaPgto: "Cartão presente"
}
console.log(carrinhoPresente)