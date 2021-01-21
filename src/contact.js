import navbar from './nav';

export default function contact() {
  const mainContainer = document.querySelector('#content');
  const contactContent = document.createElement('div');

  contactContent.classList.add('contact');
  contactContent.id = 'contact';

  mainContainer.innerHTML = '';

  contactContent.appendChild(navbar('opaque'));

  mainContainer.appendChild(contactContent);
  return mainContainer;
}
