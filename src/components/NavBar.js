

function NavBar ({dogData, Dogs, setCurrentDog, filter}) {
    let dogNames = "";
    function handleClick (dog) {
        setCurrentDog(dog)
      }
    let Doggies = filter ? Dogs : dogData;

    dogNames = Doggies.map((dog) => {
        return (
            <span 
            key={dog.id} 
            id={dog.id}
            image={dog.image}
            name={dog.name}
            onClick={() => handleClick(dog)}>
                {dog.name}
            </span>
        )
      })

    return (
        <>
            {dogNames}
        </>
    )
}

export default NavBar;