import header from './header';
import about from './about';

const homePage = () => {
  const homeContainer = document.createElement('div');

  homeContainer.appendChild(header());
  homeContainer.appendChild(about());

  return homeContainer;
};

export default homePage;