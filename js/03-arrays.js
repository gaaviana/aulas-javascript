// Decalrando um array
let alunos = ["comiocudequemtalendo", "Patati", "Patata"]

console.log(alunos);

// Acessando um elemento específico no array
console.log(`se você quer sorrir é com ${alunos[1]}`);
console.log(`se você quer brincar é com ${alunos[2]}.`);
console.log(`se você quer sorrir e brincar ${alunos[1]} ${alunos[2]}`);


/* MINI EXERCÍCIO

- Crie um novo array contendo o nome de 7 coisas que você gosta (Artista, música, livro, comida e etc)

-Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e do setimo elemento do array. Use a concatenação ou template string.
*/ 

let coisas = ["Santos", "futebol", "rap", "NFL", "pagode", "basquete", "feijoada"]

console.log(coisas);
console.log(`Não existe nada melhor do que um sabado com ${coisas[1]}, ${coisas[4]} e ${coisas[6]}.`);

// Array com Matrizes

const tecnologias = [
    ["HTML5", "CSS3", "JS"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express", ["Apache", "IIS"] ]
];

// console.log(tecnologias);

console.log(tecnologias[0][2]); // JS
console.log(tecnologias[1][0]);
console.log(tecnologias[2][3]);
console.log(tecnologias[0][0]);
console.log(tecnologias[2][4][0]);







