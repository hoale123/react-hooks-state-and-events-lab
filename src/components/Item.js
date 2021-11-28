import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart , setIsInCart] = useState(false)

  function handleCartAddClick(){
    setIsInCart((isInCart) => !isInCart)
  }
const cart = isInCart ? "in-cart" : ""
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleCartAddClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
