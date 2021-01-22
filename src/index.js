import menuPage from './menu';
import homePage from './home';
import contactPage from './contact';

import './style.css';

homePage();

export function registerEvents() {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  menu.addEventListener('click', menuPage);
  home.addEventListener('click', homePage);
  contact.addEventListener('click', contactPage);
}
