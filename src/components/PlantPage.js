import React, { useState }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {
  const [displayPlants, setDisplayPlants] = useState(plants)

  const addNewPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((r) => r.json())
    .then((newPlant)=>setDisplayPlants([...displayPlants, newPlant]))
  }

  const searchChange = (searchedName) => {
    const filteredPlants = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(searchedName.toLowerCase())
    })
    setDisplayPlants(filteredPlants)
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={addNewPlant}/>
      <Search onSearchChange={searchChange}/>
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;