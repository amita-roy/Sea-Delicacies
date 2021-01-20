module.exports = function navbar() {
  const nav = document.createElement('div');

  const logo = document.createElement('p');
  const linkList = document.createElement('div');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  nav.classList.add('navbar');
  linkList.classList.add('linkList');
  logo.classList.add('logo');

  logo.innerHTML = 'Sea Delicacies';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';

  linkList.appendChild(home);
  linkList.appendChild(menu);
  linkList.appendChild(contact);

  nav.appendChild(logo);
  nav.appendChild(linkList);

  return nav;
};
