import navbar from './nav.js';
import header from './header.js';
import about from './about.js';

export default function homePage() {
  const mainContainer = document.querySelector('#content');
  mainContainer.innerText = '';
  mainContainer.appendChild(navbar());
  mainContainer.appendChild(header());
  mainContainer.appendChild(about());

  return mainContainer;
}
