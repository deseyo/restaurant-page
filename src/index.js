import './style.css';
import { initHome } from './js/home';
import { initMenu } from './js/menu';
import { initContact } from './js/contact';

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
const content = document.querySelector('#content');

content.appendChild(initHome());

home.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(initHome())
})

menu.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(initMenu())
})

contact.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(initContact());
})