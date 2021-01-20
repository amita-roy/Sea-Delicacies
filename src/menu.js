import navbar from './nav';
import menuItems from './menuItems';

const card = (imageUrl, name, price, description) => {
  const card = document.createElement('div');
  const dishName = document.createElement('p');
  const dishPrice = document.createElement('p');
  const dishDescription = document.createElement('p');

  card.classList.add('card');

  const dishImage = new Image();
  dishImage.src = imageUrl;

  dishName.innerHTML = name;
  dishPrice.innerHTML = price;
  dishDescription.innerHTML = description;

  card.appendChild(dishImage);
  card.appendChild(dishName);
  card.appendChild(dishPrice);
  card.appendChild(dishDescription);

  return card;
};

export default function menu() {
  const mainContainer = document.querySelector('#content');
  const itemGrid = document.createElement('div');

  menuItems.forEach((item) => {
    itemGrid.appendChild(card('abc', item.name, item.price, item.description));
  });
  mainContainer.innerHTML = '';
  mainContainer.appendChild(navbar('opaque'));
  mainContainer.appendChild(itemGrid);

  return mainContainer;
}
