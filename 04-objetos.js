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

