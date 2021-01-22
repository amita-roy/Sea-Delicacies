import navbar from './nav';
import OfferBox from './offerBox';
import contactDetails from './contactDeatils';
import { registerEvents } from './index';

export default function contact() {
  const mainContainer = document.querySelector('#content');
  const contactContent = document.createElement('div');
  const detailsWrapper = document.createElement('div');

  contactContent.classList.add('contact');
  detailsWrapper.classList.add('detailsWrapper');

  mainContainer.innerHTML = '';

  detailsWrapper.appendChild(OfferBox());

  contactContent.appendChild(navbar('opaque'));
  contactContent.appendChild(detailsWrapper);
  contactContent.appendChild(contactDetails());

  mainContainer.appendChild(contactContent);
  registerEvents();
  return mainContainer;
}
