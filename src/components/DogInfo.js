
function DogInfo({currentDog, updateDog}) {

    function handleToggle (currentDog) {
        const goodDog = !currentDog.isGoodDog;
        updateDog(currentDog, goodDog)
      }

    if(currentDog === "") {return(
        <div>
            <h3>"Please select a dog from above"</h3>
        </div>
    )} else {
    return (
        <div key={currentDog.id}>
            <img src={currentDog.image} alt={currentDog.name}></img>
            <h2>{currentDog.name}</h2>
            <button onClick={() => handleToggle(currentDog)}>{currentDog.isGoodDog ? "Good Dog" : "Bad Dog"}</button>
        </div>
    )}
}

export default DogInfo;