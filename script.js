const movies = [
  {
    title: "Matrix",
    poster: "./imgs/matrix-poster.jpg",
    genre: "Ficção Científica",
    release: false,
    rated: "R",
    synopsis: `O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.`,
  },
  {
    title: "O Poderoso Chefão",
    poster: "./imgs/poderoso-chefao-poster.jpg",
    genre: "Drama",
    release: false,
    rated: "R",
    synopsis: `Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.`,
  },
  {
    title: "A Origem",
    poster: "./imgs/a-origem-poster.jpg",
    genre: "Ação",
    release: true,
    rated: "PG-13",
    synopsis: `Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império.`,
  },
  {
    title: "Pulp Fiction",
    poster: "./imgs/pulp-fiction-poster.jpg",
    genre: "Crime",
    release: false,
    rated: "R",
    synopsis: `Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.`,
  },
  {
    title: "Interestelar",
    poster: "./imgs/interestellar-poster.jpg",
    genre: "Aventura",
    release: true,
    rated: "PG-13",
    synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
  },
  {
    title: "A Fugas das Galinhas",
    poster: "./imgs/fuga-das-galinhas.jpg",
    genre: "Animação",
    release: true,
    rated: "G",
    synopsis: `Após frustradas tentativas de escapar da granja dos Tweedy, as galinhas, lideradas por Ginger, mantêm poucas esperanças. Mas, quando o galo voador Rocky aparece no galinheiro, elas acreditam que ele poderá ensiná-las a voar, e assim, uma nova luz surge no fim do túnel.`,
  },
];

/*
  Passos lógicos para adicionar um novo elementos ao HTML pelo DOM:
  - 1. Criar o elemento desejado utilizando o método document.createElement
  - 2. Adicionar as propriedades ao elemento criado (textos internos, classes)
  - 3. Capturar um elemento de referência que já existe no HTML.
  - 4. Adicionar o elemento criado ao HTML, utilizando o elemento de referencia 
  capturado.
*/

// CRIANDO OS ELEMENTOS NECESSÁRIOS
const liMovie = document.createElement("li");
const imgMoviePoster = document.createElement("img");
const divMovieInfo = document.createElement("div");
const h3MovieTitle = document.createElement("h3");
const h4MovieGenre = document.createElement("h4");
const pSynopsis = document.createElement("p");

// CUIDAMOS DA HIERARQUIA DOS ELEMENTOS (QUEM VAI DENTRO DE QUEM)
liMovie.append(imgMoviePoster, divMovieInfo);

divMovieInfo.append(h3MovieTitle, h4MovieGenre, pSynopsis);

// PREENCHER OS CONTEUDOS INTERNOS
h3MovieTitle.innerText = "Matrix";
h4MovieGenre.innerText = "Ficção Científica";
pSynopsis.innerText =
  "Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro.";
imgMoviePoster.src = "./imgs/matrix-poster.jpg";
imgMoviePoster.alt = "Poster do Filme Matrix";

// ADICIONANDO CLASSES
liMovie.classList.add("movie-item");
imgMoviePoster.classList.add("movie-poster");
divMovieInfo.classList.add("movie-info");
h3MovieTitle.classList.add("movie-title");
h4MovieGenre.classList.add("movie-genre");
pSynopsis.classList.add("movie-synopsis");

console.log(liMovie);

const ulMovies = document.querySelector(".movies-list");
// console.log(ulMovies);

ulMovies.append(liMovie);
