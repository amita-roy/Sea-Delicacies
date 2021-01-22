const coreLinks = (paren) => {
  const head = document.createElement('h4');
  const home = document.createElement('p');
  const about = document.createElement('p');
  const menu = document.createElement('p');

  head.innerText = 'Core Links';
  home.innerText = 'Home';
  about.innerText = 'About Us';
  menu.innerText = 'Menu';

  paren.appendChild(head);
  paren.appendChild(home);
  paren.appendChild(about);
  paren.appendChild(menu);
};

const supportLinks = (paren) => {
  const head = document.createElement('h4');
  const faq = document.createElement('p');
  const tc = document.createElement('p');
  const cs = document.createElement('p');

  head.innerText = 'Support';
  faq.innerText = 'FAQ';
  tc.innerText = 'Terms & Conditions';
  cs.innerText = 'Customer Support';

  paren.appendChild(head);
  paren.appendChild(faq);
  paren.appendChild(tc);
  paren.appendChild(cs);
};

const conLinks = (paren) => {
  const head = document.createElement('h4');
  const phone = document.createElement('p');
  const email = document.createElement('p');
  const add = document.createElement('p');

  head.innerText = 'Contact Us';
  phone.innerText = '(+46) 781 1234 20';
  email.innerText = 'amita.roy@workmail.com';
  add.innerText = 'Online lane 24 Stockholm, Sweden';

  paren.appendChild(head);
  paren.appendChild(phone);
  paren.appendChild(email);
  paren.appendChild(add);
};

export default function details() {
  const contactDetails = document.createElement('div');
  const linksContainer = document.createElement('div');
  const core = document.createElement('div');
  const support = document.createElement('div');
  const contactUs = document.createElement('div');

  linksContainer.classList.add('contactLinksContainer');
  contactDetails.classList.add('contactDetails');

  coreLinks(core);
  supportLinks(support);
  conLinks(contactUs);

  linksContainer.appendChild(core);
  linksContainer.appendChild(support);
  linksContainer.appendChild(contactUs);

  contactDetails.appendChild(linksContainer);

  return contactDetails;
}
