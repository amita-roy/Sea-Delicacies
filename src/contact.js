import navbar from './nav';
import OfferBox from './offerBox';
import contactDetails from './contactDeatils';

export default function contact() {
  const mainContainer = document.querySelector('#content');
  const contactContent = document.createElement('div');
  const detailsWrapper = document.createElement('div');

  contactContent.classList.add('contact');
  detailsWrapper.classList.add('detailsWrapper');
  contactContent.id = 'contact';

  mainContainer.innerHTML = '';

  detailsWrapper.appendChild(OfferBox());

  contactContent.appendChild(navbar('opaque'));
  contactContent.appendChild(detailsWrapper);
  contactContent.appendChild(contactDetails());

  mainContainer.appendChild(contactContent);
  return mainContainer;
}
