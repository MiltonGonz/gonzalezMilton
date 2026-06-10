const resultado = document.getElementById("resultado")

fetch ('https://rickandmortyapi.com/api/character')
.then (response => response.json())
.then (data => {

    const soloHumanos = data.results.filter(personajes => personajes.species === "Human")

    resultado.innerHTML = `Personajes humanos en esta página: ${soloHumanos.length} <br><br>`

    soloHumanos.forEach(element => {
        
        resultado.innerHTML += `<p>Nombre: ${element.name} Especie: ${element.species}</p>`

    });

})