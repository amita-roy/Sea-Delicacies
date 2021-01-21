export default (imageUrl, name, price, description) => {
  const card = document.createElement('div');
  const dishName = document.createElement('p');
  const dishPrice = document.createElement('p');
  const dishDescription = document.createElement('p');

  card.classList.add('card');

  const dishImage = new Image();
  dishImage.src = imageUrl;

  dishName.innerText = name;
  dishPrice.innerText = price;
  dishDescription.innerText = description;

  card.appendChild(dishImage);
  card.appendChild(dishName);
  card.appendChild(dishPrice);
  card.appendChild(dishDescription);

  return card;
};
