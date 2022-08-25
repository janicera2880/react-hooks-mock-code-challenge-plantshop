import React, { useState } from "react";

function NewPlantForm({onFormSubmit}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleImage = (event) => {
    setImage(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }

  const newPlant = {
    name, 
    image, 
    price
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleName}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}


export default NewPlantForm;
