export default function offerBox() {
  const offerContainer = document.createElement('div');
  const offerHeading = document.createElement('h3');
  const offerDesc = document.createElement('p');
  const emailInput = document.createElement('input');
  const button = document.createElement('button');

  offerContainer.classList.add('offersBox');
  offerHeading.innerText = 'Get Our Special Offers!';
  offerDesc.innerText =
    'Complete the subscription with your email id and get our special offers.';

  emailInput.setAttribute('TYPE', 'EMAIL');
  emailInput.setAttribute('PLACEHOLDER', 'Please subscribe with your email');
  button.innerText = 'Subscribe';

  offerContainer.appendChild(offerHeading);
  offerContainer.appendChild(offerDesc);
  offerContainer.appendChild(emailInput);
  offerContainer.appendChild(button);

  return offerContainer;
}
