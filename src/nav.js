export default function navbar() {
  const nav = document.createElement('div');

  const logo = document.createElement('p');
  const linkList = document.createElement('div');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  nav.classList.add('navbar');
  nav.classList.add('opaque');
  linkList.classList.add('linkList');
  logo.classList.add('logo');

  home.id = 'home';
  menu.id = 'menu';
  contact.id = 'contact';

  logo.innerText = 'Sea Delicacies';
  home.innerText = 'Home';
  menu.innerText = 'Menu';
  contact.innerText = 'Contact';

  linkList.appendChild(home);
  linkList.appendChild(menu);
  linkList.appendChild(contact);

  nav.appendChild(logo);
  nav.appendChild(linkList);

  return nav;
}
