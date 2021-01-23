import OfferBox from './offerBox';
import contactDetails from './contactDeatils';

const contact = () => {
  const contactContent = document.createElement('div');
  const detailsWrapper = document.createElement('div');

  contactContent.classList.add('contact');
  detailsWrapper.classList.add('detailsWrapper');

  detailsWrapper.appendChild(OfferBox());
  contactContent.appendChild(detailsWrapper);
  contactContent.appendChild(contactDetails());
  return contactContent;
};

export default contact;