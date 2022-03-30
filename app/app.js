//Tipos de Dados Primitivos

//Declarações = Valor 
var nome = 'César'; //string;
var idade = 32; //number
var maiorDeIdade = true; //boolean
var telefone; //undefined
var endereco = null; //null

console.log(endereco);

var meuAnimal = "cachorro" //Camel Case --> MAIS USADO
var meu_animal = "gato" //Snake Case
var MeuAnimal = "tartaruga" //Pascal Case

console.log(meuAnimal)
console.log(meu_animal)
console.log(MeuAnimal)

// var // Não usar
// let // Só usar essa
// const //Usar quando você quer que o valor seja constante. Ou seja, ele nunca vai poder muadar

let sobrenome = "Silva";
console.log(sobrenome);


//Concatenação -> Juntar Texto / Combinar Texto
console.log("Meu nome é" + " " + "César");

let espaco = " "

//Interpolação -> Combinar Variáveis e Textos
console.log("Meu nome completo é: " + nome + espaco + sobrenome + ".E minha idade é: " + idade + espaco + "!");

console.log(`Meu nome completo é: ${nome} ${sobrenome} .E minha idade é ${idade}`);


//TIPOS DE DADOS NÃO PRIMITIVOS
const pedido = [["Hamburguer", "Batata-Frita"], ["Refrigerante", "Milk-Shake"]];
console.log(pedido) //Mostra a lista completa.
// pedido[0][0] = "Cheeseburger"
console.log(pedido) //Mostra a lista completa.
console.log(pedido[1][0]);

pedido = ["Cheeseburger", "Batata-Frita",];

console.log(pedido);



let objPedido = {
    sanduiche : "Hamburguer",
    acompanhamento: "Batata-Frita",
    bebida: "Refrigerante",
    sobremesa : "Milk-shake"
}

console.log(objPedido.bebida, "-->Estou no objeto");





