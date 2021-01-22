import navbar from './nav';
import menuItems from './menuItems';
import ItemCard from './itemCard';
import { registerEvents } from './index';

export default function menu() {
  const mainContainer = document.querySelector('#content');
  const menuContent = document.createElement('div');
  const itemGrid = document.createElement('div');

  menuContent.classList.add('menu');
  itemGrid.classList.add('itemList');
  menuItems.forEach((item) => {
    itemGrid.appendChild(
      ItemCard(item.url, item.name, item.price, item.description)
    );
  });
  mainContainer.innerHTML = '';

  menuContent.appendChild(navbar('opaque'));
  menuContent.appendChild(itemGrid);

  mainContainer.appendChild(menuContent);

  registerEvents();
  return mainContainer;
}
