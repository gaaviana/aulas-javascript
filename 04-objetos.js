// Objetos com dados de uma pessoa
const pessoa = {
    nome: "Gabriel",
    idade: 18,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

// Acessando determinadas propriedades

console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`);

// Exemplo 2: Objeto com array

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
}

console.log(livro);

// Acesso usando nome da prop. e indice do array desta prop.
console.log(livro.volumes[1]);

// Exemplo 3: Array de Objetos

const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },

    {
        titulo: "Senhor doa Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }

];

console.log(livros[1].autor);

/* Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
Data de Nascimento
Lista de telefones (fixo e celular)
(DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
rua
número
bairro
Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

const aluno = {
    nomeCompleto: "Gabriel Viana Paulino",
    datadeNascimento: "05/01/2006",
    listadetelefones: [
        "25629292",
        "11 978360876"
    ],

    endereco: {
        rua: "Rua José Borges Do Canto",
        numero: "20, D",
        bairro: "Jardim Camargo Novo"
    }
}

console.log(`Nome: ${aluno.nomeCompleto}`); 
console.log(`Telefone: ${aluno.listadetelefones[0]}`);
console.log(`Celular: ${aluno.listadetelefones[1]}`);
console.log(`Bairro: ${aluno.endereco.bairro}`);






