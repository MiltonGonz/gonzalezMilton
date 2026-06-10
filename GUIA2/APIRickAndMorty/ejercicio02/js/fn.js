const resultado = document.getElementById("resultado")

fetch ('https://rickandmortyapi.com/api/character')
.then (response => response.json())
.then (data => {

    personajes = data.results
   personajes.slice(0,5).forEach(personaje => {

       
        resultado.innerHTML += `<p>${personaje.name} -- ${personaje.status}</p>`
    });
})