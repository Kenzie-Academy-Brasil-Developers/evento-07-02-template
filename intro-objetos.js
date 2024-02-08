const filmesArray = [
  "Matrix", // indice 0
  "Ficção Científica",
  "O Poderoso Chefão", // indice 1
  "Drama",
  "A Origem", // indice 2
  "Ação",
  "Pulp Fiction", // indice 3
  "Crime",
  "Interstellar", // indice 4
  "Aventura",
];

// console.log(filmesArray[1]);

// Objetos
const filmeObj = {
  titulo: "Matrix",
  genero: "Ficção Científica",
};

// console.log(filmeObj.titulo);
// console.log(filmeObj.genero);

// Array de Objetos

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

// console.log(filmes[0]);
// console.log(filmes[0].titulo);

// Estrutura de repetição
// console.log(filmes.length);
// inicialidor; condição de parada ( indice <= 5 ); incremento
for (let indice = 0; indice < filmes.length; indice++) {
  // console.log("loop rodando / i =", indice);
  // console.log(filmes[indice].titulo);
}

// console.log("saiu do for");
