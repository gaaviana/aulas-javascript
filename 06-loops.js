/* Principais comandos de repetições

- while - enquanto
-for - para

São comandos de uso geral, existem em praticamente qualquer linguagem de programação
*/

// Exemplo 1

let contador = 1;

while (contador <= 5 ) {
    console.log("Valor do contador é: "+contador);
    contador++; //++ operador de incrimento
}

console.log("---\n");

// Exemplo 2

for ( let contador = 1; contador <=10; contador++) {
    console.log("Oieee pela "+contador+"a vez!");
    
}
console.log("Chega chatao");


/* nomeclatura para variaveis de controle possamos dar qualquer nome (como contador por exemplo), geralmente usadas as letras i, j ou k (ou outras letras se necessario) */
for ( let i = 1; i <= 3; i++) {
    console.log("Valor de i é: "+i);
    
}

console.log("---\n");

// loops exclusivos do JS para estruturas de dados

// for/of -> loops para array
const times = ["santos", "corinthias", "palmeiras" ,"são paulo"];
for (const time of times ) {
    console.log(time);
    
}

console.log("---\n");

// Usando o for tradicional
for (let i = 0; i < times.length; i++){
    console.log(times[i]);
}

// in
const pessoa = {
    nome: "Gabriel Viana Paulino",
    idade: 18,
    cidade: "São Paulo",
    estado: "SP",
    email: "gavi@gmail.com",
    time: "Santos"
};

for (const prop in pessoa){
    // mostrar somente o nome da propriedade
    console.log(prop);
    // mostrar somente o valor da proprieda e
    console.log(pessoa[prop]);
    
    
}


console.log("---\n");

/* exercicios

1- Faça um array chamado "clientes" contendo 3 objetos. Cada objeto devera ter uma propriedade "identificador" (com valores 1, 2 e 3)
e uma propriedade "nome" (com os nomes dos clientes: "goku", "naruto", "Shiryu") 

2- Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
- cliente: Goku, Id: 1
*/

const clientes = [
    {
        nome: "Goku",
        identificador: 1
    },
    {
        nome: "Naruto",
        identificador: 2
    },
    {
        nome: "Shiryu",
        identificador: 3
    }
]

for (const cliente of clientes) {
    console.log("Cliente: "+cliente.nome+", Id: "+cliente.identificador);
}

