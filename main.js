
// menu
function dropdown() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const reviews = [
  {
    id: 1,
    name: "La donna dei miei sogni",
    img: './img/cover1.jpg',
    text:
      "Un incontro fugace in un caffè. Un biglietto con un nome e un numero, ma non del tutto leggibile. Ventiquattr'ore per trovare l'amore. Nicholas Barreau ci regala la storia più romantica dell'anno: una caccia al tesoro negli angoli più segreti di Parigi.",
  },
  {
    id: 2,
    name: "Le balene mangiano da sole",
    img: './img/cover2.jpg',
    text:
      "Napoletano ventitreenne trapiantato a Milano, Gennaro Di Nola, detto Genny, di professione rider, ha l'abitudine di fare un gioco: indovinare il tipo di persona che gli aprirà la porta in base al cibo che ha ordinato. Quei pochi secondi in cui sbircia nella vita degli altri, fermo sulla soglia della loro casa, sono per lui una tentazione irresistibile, ed è difficile che sbagli a tracciare un profilo.",
  },
  {
    id: 3,
    name: "Il monaco",
    img: './img/cover3.jpg',
    text:
      "Il monaco è Ambrosio, in odore di santità, ammirato da tutta Madrid per le sue parole trascinanti. Il tentatore è Matilde, la donna demoniaca travestita da novizio, la splendida maga perversa. Negli anni '30 Antonin Artaud fece del romanzo gotico di Lewis una sorta di copia francese",
  },
  {
    id: 4,
    name: "Flush",
    img: './img/cover4.jpg',
    text:
      "Cresciuta in compagnia di uno scoiattolo, una marmotta e un topo di nome Jacobi, Woolf dedicò il suo primo saggio alla morte del cane di famiglia. Infatti, mentre stava leggendo le lettere d'amore di Elizabeth Barrett e Robert Browning, rimase estremamente colpita dalla figura del loro cane. Flush fu il compagno fedele della Barrett mentre era confinata nel suo letto di malattia a Londra, e al suo cocker venne dedicata anche una poesia",
  },
  {
    id: 5,
    name: "Le assaggiatrici",
    img: './img/cover5.jpg',
    text:
      "Con una rara capacità di dare conto alle ambiguità dell'animo umano, Rosella Postorino, ispirandosi alla storia vera di Margot Wölk (assaggiatrice di Hitler nella caserma di Krausendorf) racconta la vicenda eccezionale di una donna in trappola, fragile di fronte alla violenza della storia, forte dei desideri della giovinezza",
  },
  {
    id: 6,
    name: "Lungo petalo di mare",
    img: './img/cover6.jpg',
    text:
      "Nell'agosto 1939 Pablo Neruda organizzò quello che poi ha definito il suo poema più bello: il Winnipeg, una nave che ha portato in Cile 2200 rifugiati spagnoli che fuggivano dalle rappresaglie franchiste. A settant'anni dall'approdo a Santiago del Cile del Winnipeg, la nave equipaggiata da Neruda per mettere in salvo più di duemila esuli della Guerra civile spagnola.",
  },
  {
    id: 7,
    name: "L'isola dell'abbandono",
    img: './img/cover7.jpg',
    text:
      "Pare che l'espressione piantare in asso si debba a Teseo che, uscito dal labirinto grazie all'aiuto di Arianna, anziché riportarla con sé da Creta ad Atene, la lascia sull'isola di Naxos. In Naxos: in asso, appunto. Proprio su quell'isola, l'inquieta e misteriosa protagonista di questo romanzo sente l'urgenza di tornare.",
  },
  {
    id: 8,
    name: "Venezia è un pesce",
    img: './img/cover8.jpg',
    text:
      "Un grande classico per smarrirsi e bighellonare nel labirinto della città lagunare. A vent'anni dalla prima edizione si rinnova, perché nuovi tragitti dei sensi sono divenuti possibili.",
  },
  {
    id: 9,
    name: "La mennulara",
    img: './img/cover9.jpg',
    text:
      "Una grande storia siciliana oggi ancora più ricca di fascino e dettagli: una gioia per i lettori che hanno amato La Mennulara – oltre un milione di copie vendute, tradotto in tutto il mondo –, un’occasione per i lettori che ancora non hanno incontrato questo classico contemporaneo.",
  },
];

// select items
const img = document.getElementById("slider");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
});

// show person based on item
function show(book) {
  const item = reviews[book];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  show(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  show(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  show(currentItem);
});

// questions
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {
        question.classList.toggle('show-text');
    })
})