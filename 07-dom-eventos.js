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
textoDom.innerHTML = "<i>pow pow na ppkninha e tei tei na cocaina</i>"

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

const ex1 = document.querySelector("#exemplo01");
const msg = document.querySelector("#mensagem");

ex1.addEventListener("click", function (){
    msg.innerHTML = "Olá 😀!";
})

