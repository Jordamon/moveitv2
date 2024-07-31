import React, { useState } from 'react';
import ShopItemsData from './Data';
import ShopGenerator from './ShopGenerator';
import './Shop.css';

const Shop = () => {
  const [filteredItems, setFilteredItems] = useState(ShopItemsData);
  const [filterOption, setFilterOption] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    if (value === 'Low-High') {
      generateLowToHighSortedShop();
    } else if (value === 'High-Low') {
      generateHighToLowSortedShop();
    } else if (value === 'A-Z') {
      generateAToZSortedShop();
    } else if (value === 'Z-A') {
      generateZToASortedShop();
    } else {
      resetFilter();
    }
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterOption(value);

    if (value === "Men's") {
      filterItems("m");
    } else if (value === "Women's") {
      filterItems("f");
    } else {
      resetFilter();
    }
  };

  const filterItems = (gender) => {
    const filteredItems = ShopItemsData.filter((item) => {
      return item.gender === gender || item.gender === 'n';
    });
    setFilteredItems(filteredItems);
    setFilterOption(gender === 'm' ? "Men's" : "Women's");
    setSortOption(''); // Reset sort option
  };

  const generateLowToHighSortedShop = () => {
    let sortedItems = filteredItems.slice();
    sortedItems.sort((a, b) => a.price - b.price);
    setFilteredItems(sortedItems);
    setSortOption('Low-High');
  };

  const generateHighToLowSortedShop = () => {
    let sortedItems = filteredItems.slice();
    sortedItems.sort((a, b) => b.price - a.price);
    setFilteredItems(sortedItems);
    setSortOption('High-Low');
  };

  const generateAToZSortedShop = () => {
    let sortedItems = filteredItems.slice();
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredItems(sortedItems);
    setSortOption('A-Z');
  };

  const generateZToASortedShop = () => {
    let sortedItems = filteredItems.slice();
    sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    setFilteredItems(sortedItems);
    setSortOption('Z-A');
  };

  const resetFilter = () => {
    setFilteredItems(ShopItemsData);
    setFilterOption('All');
    setSortOption(''); // Reset sort option
  };

  return (
    <div className="shop">
      <div className="small-container">
        <div className="row row-2 select-container row filter">
          <h2 className='allprod'>All Products</h2>
          <select
            id="dropdown-filter"
            className='dropfilter'
            value={filterOption}
            onChange={handleFilterChange}
          >
            <option value="">Default Filter</option>
            <option value="Men's">Men's</option>
            <option value="Women's">Women's</option>
          </select>
          <select
            id="dropdown"
            className='dropfilter'
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Default Sorting</option>
            <option value="Low-High">Sort By Price (Low-High)</option>
            <option value="High-Low">Sort By Price (High-Low)</option>
            <option value="A-Z">Sort By Name (A-Z)</option>
            <option value="Z-A">Sort By Name (Z-A)</option>
          </select>
        </div>
      </div>
      <div className="small-container shop" id="shop">
        <ShopGenerator items={filteredItems} />
      </div>
      <div className="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
      </div>
    </div>
  );
};

export default Shop;
