import menuPage from './menu';
import homePage from './home';
import contactPage from './contact';

function enableTransition() {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('opaque');
      $('.navbar').removeClass('transparent');
    } else {
      $('.navbar').addClass('transparent');
      $('.navbar').removeClass('opaque');
    }
  });
}

function disableTransition() {
  $(window).off('scroll');
}

export default function navbar(navbarStyle = 'transparent') {
  const nav = document.createElement('div');
  const $ = jQuery;

  const logo = document.createElement('p');
  const linkList = document.createElement('div');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  nav.classList.add('navbar');
  nav.classList.add(navbarStyle);
  linkList.classList.add('linkList');
  logo.classList.add('logo');

  if (navbarStyle === 'transparent') {
    enableTransition();
  } else {
    disableTransition();
  }

  logo.innerText = 'Sea Delicacies';
  home.innerText = 'Home';
  menu.innerText = 'Menu';
  contact.innerText = 'Contact';

  linkList.appendChild(home);
  linkList.appendChild(menu);
  linkList.appendChild(contact);

  nav.appendChild(logo);
  nav.appendChild(linkList);

  menu.addEventListener('click', menuPage);
  home.addEventListener('click', homePage);
  contact.addEventListener('click', contactPage);

  return nav;
}
