import navbar from './nav';
import header from './header';
import about from './about';

export default function homePage() {
  const mainContainer = document.querySelector('#content');
  mainContainer.innerHTML = '';
  mainContainer.appendChild(navbar());
  mainContainer.appendChild(header());
  mainContainer.appendChild(about());

  return mainContainer;
}
