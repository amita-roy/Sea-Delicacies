export default function details() {
  const contactDetails = document.createElement('div');
  const linksContainer = document.createElement('div');
  const core = document.createElement('div');
  const support = document.createElement('div');
  const contactUs = document.createElement('div');

  linksContainer.classList.add('contactLinksContainer');
  contactDetails.classList.add('contactDetails');
  core.innerText = 'All Core links';
  support.innerText = 'All Support links';
  contactUs.innerText = 'All contact links';

  linksContainer.appendChild(core);
  linksContainer.appendChild(support);
  linksContainer.appendChild(contactUs);

  contactDetails.appendChild(linksContainer);

  return contactDetails;
}
