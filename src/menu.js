import menuItems from './menuItems';
import ItemCard from './itemCard';

export default function menu() {
  const menuContent = document.createElement('div');
  const itemGrid = document.createElement('div');

  menuContent.classList.add('menu');
  itemGrid.classList.add('itemList');

  menuItems.forEach((item) => {
    itemGrid.appendChild(
      ItemCard(item.url, item.name, item.price, item.description),
    );
  });

  menuContent.appendChild(itemGrid);
  return menuContent;
}
