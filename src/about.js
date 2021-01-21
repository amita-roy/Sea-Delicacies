import aboutDesc from './aboutDesc.js';
import aboutImage from './assets/images/about1.png';

const content = () => {
  const rc = document.createElement('div');

  const heading = document.createElement('h3');
  const description = document.createElement('p');
  const cta = document.createElement('button');

  rc.classList.add('content');

  heading.innerHTML = 'About Us';
  description.innerHTML = aboutDesc;

  cta.innerHTML = 'View More';

  rc.appendChild(heading);
  rc.appendChild(description);
  rc.appendChild(cta);
  return rc;
};
const imageContainer = () => {
  const lc = document.createElement('div');

  const image = new Image();
  image.src = aboutImage;

  lc.appendChild(image);
  return lc;
};

export default function about() {
  const aboutUs = document.createElement('div');

  aboutUs.classList.add('about');

  aboutUs.appendChild(imageContainer());
  aboutUs.appendChild(content());

  return aboutUs;
}
