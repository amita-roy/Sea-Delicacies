import navbar from './nav';
import header from './header';
import about from './about';
import { registerEvents } from './index';

export default function homePage() {
  const mainContainer = document.querySelector('#content');
  const homeContainer = document.createElement('div');

  mainContainer.innerHTML = '';

  homeContainer.appendChild(navbar());
  homeContainer.appendChild(header());
  homeContainer.appendChild(about());
  mainContainer.appendChild(homeContainer);

  registerEvents();

  return mainContainer;
}
