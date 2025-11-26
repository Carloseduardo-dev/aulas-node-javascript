const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
// const notaQuartoBi = "5";
const notaQuartoBi = Number.parseInt("5");

const total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

console.log(total);

console.log(5 * 'a'); // NaN
console.log('5' * '5');


function saundacao(nome){
    return `Olá, ${nome}!`
}

const mensagem = saundacao("Maria")
console.log(mensagem);

