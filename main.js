
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
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 2,
    name: "Le balene mangiano da sole",
    img: './img/cover2.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 3,
    name: "Il monaco",
    img: './img/cover3.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 4,
    name: "Flush",
    img: './img/cover4.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 5,
    name: "Le assaggiatrici",
    img: './img/cover5.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 6,
    name: "Lungo petalo di mare",
    img: './img/cover6.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 7,
    name: "L'isola dell'abbandono",
    img: './img/cover7.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 8,
    name: "Venezia è un pesce",
    img: './img/cover8.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
  },
  {
    id: 9,
    name: "La mennulara",
    img: './img/cover9.jpg',
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
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
function showPerson(person) {
  const item = reviews[person];
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
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// questions
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {
        question.classList.toggle('show-text');
    })
})