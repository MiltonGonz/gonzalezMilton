const resultado = document.getElementById("resultado")

fetch ('https://rickandmortyapi.com/api/character')
.then (response => response.json())
.then (data => {

    


    const filtrado = data.results.filter(personajes => personajes.status === "Alive")

     resultado.innerHTML += `Personajes vivos en esta página: ${filtrado.length} <br><br>`

        
    filtrado.forEach(personaje => {

        resultado.innerHTML += `<p> ${personaje.name} </p>`

    });

})