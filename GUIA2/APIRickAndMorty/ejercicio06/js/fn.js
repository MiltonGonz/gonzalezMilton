const resultado = document.getElementById("resultado")

fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {


const personajes = data.results

personajes.sort((a,b) => b.episode.length - a.episode.length)
     
            personajes.forEach(personaje => {

                resultado.innerHTML += `<p>Nombre: ${personaje.name}</p>
                                        <p>Episodios: ${personaje.episode.length}</p>`
                
            });
})  