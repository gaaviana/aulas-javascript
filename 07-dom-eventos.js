// Função de acesso e manipulação do DOM

/* 
queryselector() Função para selecinar um unico elemento na pagina (DOM).

queryselectorAll() Função para selecinar vários elemento na pagina (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.
*/

/* Exemplo 1 */

const titulo = document.querySelector("h1");

const textoDom = document.querySelector(".texto-dom");

const subtitulos = document.querySelectorAll("h2");

const varios = document.querySelectorAll("p, img, button")

// Modificar elementos no DOM

titulo.textContent = "Olá JavaScript!";
textoDom.innerHTML = "<i>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</i>"

/* Selecionar todos os links da lista de referências, colocar o atributo target valendo _blank. */

const linksReferencias = document.querySelectorAll(".lista-de-referencias a ");
console.log(linksReferencias);

for (const link of linksReferencias) {
    link.setAttribute("target", "_blank")

    // link.target = "_blank"        
}



/* 
for (let links = 0; links < linksReferencias.length; links++) {
    linksReferencias[links].setAttribute("target", "_blank");
} */


/* Manipulando Eventos */

/* Poderíamos também usar a função getElementById em vez de querySelector. A diferença é que ela só funciona para seleção através do ID. Obs.: ao usá-la NÃO COLOQUE #. */
const ex1 = document.querySelector("#exemplo01");
const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body")



//  ouvinte de evento (event listener)
/* aplicado ao elemento ALVO do evento desejado ("click") e uma função para executar as ações a partir do evento. Obs.: esta função é considerada do tipo "anonima" e é conhecida como "callback". */
ex1.addEventListener("click", function () {
    //Acessamos o <p> vazio e colocamos conteudo nele
    msg.innerHTML = "Olá 😀!";

    // Modificar a Página (CSS via JS)
    pagina.style.fontFamily = "verdana"
})

/* ouvinte de evento para voltar ao normal (sem texto no paragrafo e com fonte padrão) */
msg.addEventListener("dblclick", function () {
    msg.innerHTML = "";
    pagina.style.fontFamily = "initial"
})

/* exemplo 2 modo noturno */

const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function () {
    /* usamos toggle no calssList para alternar a aplicação/remoção da classe "noturno". Na prática, vira liga/desliga */
    pagina.classList.toggle("noturno");

    /* DESAFIO!! FAÇA AQUI MESMO: Trocar o texto do botão. se a pagina tiver com a classe noturno ativada o botao deve monstrar a palavra desativar, caso o contrario deve monstra a palavra ativar */

    if (
        pagina.classList.contains("noturno")) {
        botaoAtivar.innerHTML = "Desativar"
    }

    else {
        botaoAtivar.innerHTML = "Ativar"
    }
})


let a = "10";
let b = 10;
let resultado = a == b;
console.log(resultado);































