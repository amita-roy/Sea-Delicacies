import header from './header';
import about from './about';

export default function homePage() {
  const homeContainer = document.createElement('div');

  homeContainer.appendChild(header());
  homeContainer.appendChild(about());

  return homeContainer;
}
