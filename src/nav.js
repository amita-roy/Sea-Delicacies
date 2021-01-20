module.exports = function navbar() {
  const nav = document.createElement('div');
  const $ = jQuery;

  const logo = document.createElement('p');
  const linkList = document.createElement('div');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  nav.classList.add('navbar');
  linkList.classList.add('linkList');
  logo.classList.add('logo');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').css('backgroundColor', 'white');
      $('.linkList a').css('color', '#ff9e01');
    } else {
      $('.navbar').css('backgroundColor', 'transparent');
      $('.linkList a').css('color', 'white');
    }
  });

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
