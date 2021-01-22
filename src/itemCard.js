export default (imageUrl, name, price, description) => {
  const card = document.createElement('div');
  const cardImage = document.createElement('div');
  const cardDetails = document.createElement('div');
  const cardDetailsTop = document.createElement('div');
  const dishName = document.createElement('p');
  const dishPrice = document.createElement('p');
  const dishDescription = document.createElement('p');

  card.classList.add('card');
  cardImage.classList.add('cardImage');
  cardDetails.classList.add('cardDetails');
  cardDetailsTop.classList.add('cardDetailsTop');
  dishName.classList.add('dishName');
  dishPrice.classList.add('dishPrice');
  dishDescription.classList.add('dishDescription');

  cardImage.style.backgroundImage = `url(${imageUrl})`;

  dishName.innerText = name;
  dishPrice.innerText = price;
  dishDescription.innerText = description;

  cardDetailsTop.appendChild(dishName);
  cardDetailsTop.appendChild(dishPrice);

  cardDetails.appendChild(cardDetailsTop);
  cardDetails.appendChild(dishDescription);

  card.appendChild(cardImage);

  card.appendChild(cardDetails);

  return card;
};
