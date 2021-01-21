import navbar from './nav';
import menuItems from './menuItems';
import ItemCard from './itemCard';

export default function menu() {
  const mainContainer = document.querySelector('#content');
  const menuContent = document.createElement('div');
  const itemGrid = document.createElement('div');

  menuContent.classList.add('menu');
  itemGrid.classList.add('itemList');
  menuContent.id = 'menu';
  menuItems.forEach((item) => {
    itemGrid.appendChild(
      ItemCard(item.url, item.name, item.price, item.description)
    );
  });
  mainContainer.innerHTML = '';

  menuContent.appendChild(navbar('opaque'));
  menuContent.appendChild(itemGrid);

  mainContainer.appendChild(menuContent);
  return mainContainer;
}
