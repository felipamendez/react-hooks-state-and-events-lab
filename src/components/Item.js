import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  
  const itemClass = inCart ? "in-cart" : " "
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"
  const buttonClass = inCart ? "remove" : "add"  

  function clickHandler () {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={clickHandler}>{buttonText}</button>
    </li>
  );
}

export default Item;
