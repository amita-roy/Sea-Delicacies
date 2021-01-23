import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';
import navbar from './nav';

import './style.css';

const mainContainer = document.createElement('div');
mainContainer.id = 'content';

document.body.appendChild(mainContainer);

// const mainContainer = document.getElementById('content');
const body = document.createElement('div');

mainContainer.appendChild(navbar());
mainContainer.appendChild(body);

body.appendChild(homePage());

const registerEvents = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  menu.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(menuPage());
  });

  home.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(homePage());
  });

  contact.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(contactPage());
  });
};

registerEvents();
