const body = document.querySelector("body");
body.style.backgroundColor = "teal";

const paragraph = document.querySelector("p");
// console.log(paragraph);
// paragraph.style.backgroundColor = "tomato";
// paragraph.innerText = "Novo texto do paragrafo alterado pelo DOM";
// DOCUMENT OBJECT MODEL

const h1Titulo = document.querySelector("#titulo-nivel-1");
// console.log(h1Titulo);

h1Titulo.innerText = "Titulo modificado pelo DOM";

const paragraphs = document.querySelectorAll(".paragrafo");
// console.log(paragraphs);

// paragraphs.style.backgroundColor = "tomato";
for (let i = 0; i < paragraphs.length; i++) {
  // console.log(paragraphs[i]);
  paragraphs[i].style.backgroundColor = "tomato";
}

const filmes = [
  // indice 0
  {
    titulo: "Matrix",
    genero: "Ficção Científica",
  },
  // indice 1
  {
    titulo: "O Poderoso Chefão",
    genero: "Crime",
  },
  // indice 2
  {
    titulo: "A Origem",
    genero: "Ação",
  },
  // indice 3
  {
    titulo: "Pulp Fiction",
    genero: "Crime",
  },
  // indice 4
  {
    titulo: "Interstellar",
    genero: "Aventura",
  },
];

const liFilme = document.querySelectorAll(".filme-item");
console.log(liFilme);

for (let i = 0; i < filmes.length; i++) {
  const tituloFilme = filmes[i].titulo;
  liFilme[i].innerText = tituloFilme;
  // console.log(tituloFilme);
  // filmes[i].style.backgroundColor = "tomato";
}
