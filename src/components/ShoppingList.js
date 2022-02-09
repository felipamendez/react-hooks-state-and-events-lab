import React, { useState } from "react";
import Item from "./Item";

//filter list of items by category
//selectedCategory keeps track of the selected value with onchange 
//use selectedCategory to display items based on selectedCategory

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(""); 

  function handleSelection(event) {
    setSelectedCategory(event.target.value)
  }

  const searchResults = items.filter((item) => {
    return ( selectedCategory === "All" ? true : item.category.includes(selectedCategory) )
  })
  
  //check to see if value is all
  //if value all, tell filter to return true, 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
