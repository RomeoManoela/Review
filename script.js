'use strict';
const tab = [
  {
    nom: 'Romeo Manoela',
    fonction: 'DEV FRONTEND',
    img: 'img/1.jpg',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid inventore libero perferendis cum eaque quam reprehenderit asperiores modi autem veritatis quaerat dolores dignissimos iusto, ad, nam natus non eum!',
  },
  {
    nom: 'Esoalahy Josefa',
    fonction: 'DEV BACKEND',
    img: 'img/2.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa praesentium dolores quas cum nihil explicabo temporibus at quod? Deleniti ducimus molestias minus molestiae a tempore in expedita magnam consequatur odit.',
  },
  {
    nom: 'Joseph Navony',
    fonction: 'Web Master',
    img: 'img/3.jpg',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere consectetur perspiciatis tenetur officia corporis, inventore doloribus quia blanditiis quae accusantium neque fugiat rem voluptatibus natus itaque? Repellendus, eveniet eum.',
  },
];
const imgEl = document.querySelector('.person');
const nomEl = document.querySelector('h4');
const fonctionEL = document.querySelector('h3');
const infoEl = document.querySelector('p');
let i = 0;

const modifyContent = function (j) {
  fonctionEL.textContent = tab[j].fonction;
  imgEl.src = tab[j].img;
  nomEl.textContent = tab[j].nom;
  infoEl.textContent = tab[j].info;
};
document.querySelector('.avant').addEventListener('click', function () {
  i--;
  console.log(i == -1);
  i == -1 && (i = 2);
  modifyContent(i);
});
document.querySelector('.apres').addEventListener('click', function () {
  i++;
  i == 3 && (i = 0);
  modifyContent(i);
});
document.querySelector('.surprise').addEventListener('click', function () {
  const indice = Math.trunc(Math.random() * tab.length);
  modifyContent(indice);
});
