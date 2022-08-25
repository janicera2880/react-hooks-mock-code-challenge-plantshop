import React, { useState } from "react";

function PlantCard({image, name, price}) {
  const [isInStock, setIsInStock]=useState(true)

  const handleToggleStock = () => {
    setIsInStock((isInStock) => !isInStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button className={isInStock ? "primary": null} onClick={handleToggleStock}>{isInStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
