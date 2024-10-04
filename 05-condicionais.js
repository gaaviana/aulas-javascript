/*  Comandos condicionais 
if -> se
else -> senão*/

// Exemplo 1: condicional simples
let numero = 10;

if ( numero >= 10) {
    console.log(numero);   
}

// Exemplo 2: Condicional composta
let aluno = "Klaibert";
let idade = 18;

/* Lógica: verificar se o aluno é maior ou menor de idade. */
if( idade < 18 ){
    console.log("É menor de idade");    
}
else {
    console.log("É maior de idade");
    
}

console.log("---\n");


/* Exercicios

1) crie duas variaveis conforme a seguir:
nota 1 (contendo um valor de 0 a 10)
nota 1 (contendo um valor de 0 a 10)

2) crie uma variavel chamada média que recebera o valor CALCULADO da média das notas.

3) programe uma condicional que verifique o valor da media calculada, se a média for maior que 7  mostra "aprovado" caso o contrario mostre "reprovado"
 */

let nota1 = 10;
let nota2 = 3;

let media = (nota1 + nota2) /2 
let situacao = media >= 7 ? "aprovado" : "reprovado";
console.log(situacao);
/* 
console.log(media);

if (media <7 ) {
    console.log("Reprovado!");
}
else {
    console.log("Aprovado!");
    
} */

/* ShortHand if/else (if/else "curto/abreviado") */

