import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogData, setDogData] = useState([])
  const [currentDog, setCurrentDog] = useState("")
  const [filter, setFilter] = useState(false)
  const [Dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then((response) => response.json())
    .then(setDogData);
  }, 
  []);

  function updateDog(currentDog, goodDog){
    setCurrentDog({...currentDog, isGoodDog: goodDog})
    fetch(`http://localhost:3001/pups/${currentDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({isGoodDog: goodDog}),
    });
  }

  function handleFilter() {
    const click = !filter;
    setFilter(!filter)
    if (click === true){
      const filteredDogs = dogData.filter(dog => {
        if(dog.isGoodDog === true) {
          return true;
        } else {
          return false;
        }; 
    });
    setDogs(filteredDogs);
  }    
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button 
        id="good-dog-filter"
        onClick={handleFilter}
        >
          Filter good dogs: {!filter ? "OFF" : "ON"}
        </button>
      </div>
      <div id="dog-bar">
        <NavBar 
        dogData={dogData}
        Dogs={Dogs}
        filter={filter} 
        setCurrentDog={setCurrentDog} 
        />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo 
          currentDog={currentDog} 
          updateDog={updateDog}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
