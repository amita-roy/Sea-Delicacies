import navbar from './nav';
import menuItems from './menuItems';
import ItemCard from './itemCard';

export default function menu() {
  const mainContainer = document.querySelector('#content');
  const itemGrid = document.createElement('div');

  menuItems.forEach((item) => {
    itemGrid.appendChild(
      ItemCard(item.url, item.name, item.price, item.description)
    );
  });
  mainContainer.innerHTML = '';
  mainContainer.appendChild(navbar('opaque'));
  mainContainer.appendChild(itemGrid);

  return mainContainer;
}
