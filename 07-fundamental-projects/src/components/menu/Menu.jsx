import React, { useState, useRef } from 'react';
import MenuItemList from './MenuItemList';
import Categories from './Categories';
import Title from './Title';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const categoriesContainer = useRef(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories
          categories={categoriesContainer.current}
          filterItems={filterItems}
        />
        <MenuItemList items={menuItems} />
      </section>
    </main>
  );
}

export default Menu;
