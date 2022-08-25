import React, {useState, useEffect} from "react";
import Header from './Header';
import PlantPage from "./PlantPage";


function App() {
  const [plants,setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantData) => setPlants(plantData));
  }, []); 

  return (
    <div className="app">
      <Header />
      {plants.length ? <PlantPage plants={plants}/> : null}
    </div>
  );
}

export default App;
