// const estudante1 = "cadu";

// let estudante = estudante1

// if ( 1 > 0){
//     const estudante = "Carolina";
//     console.log(estudante);
// }
// console.log(estudante, estudante1);

// ESCOPO GLOBAL
const nome0 =  "Cadu";

function cumprimentar1 (){
    console.log(`Olá, ${nome0}`);
    console.log("Olá,", nome0);
    console.log("Olá, " + nome0);     
}
cumprimentar1();

/*// ESCOPO DE BLOCO
if (1 > 0) {
    let nome2 = "Ana";
    console.log(nome2);   // 'Ana'
}
// Variável `nome` não está acessível
console.log(nome2);  // Erro: nome is not defined*/

// Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão ser acessadas de fora do bloco. Teste:

// if (1 > 0) {
//     var nome3 = "Nanda";
//     console.log(nome3);  // Nanda
// }

// console.log(nome3);  // Nanda


// ESCOPO DE FUNÇÃO
//Variáveis declaradas dentro de uma função são consideradas “locais” (ou seja, o oposto de “globais”) e não podem ser acessadas por código que esteja fora do bloco da função.
function cumprimentar() {
    const nome = "Carlos"; // variavél local
    const cumprimento = "Olá"; // variavél local
    console.log(cumprimento, nome,"!");
}
//console.log(cumprimento, nome,"!"); //Dará erro de “not defined” no console
cumprimentar()

let n = 123.5569
console.log(n.toFixed(2));

