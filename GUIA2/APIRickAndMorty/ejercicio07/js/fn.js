const resultado = document.getElementById("resultado")

fetch (`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {

 const personajes = data.results

 const personajesConImagen = personajes.every(personaje => personaje.image !== "")

 if (personajesConImagen) 
{

    resultado.innerHTML = "✅ Todos los personajes tienen imagen"

} else {

    resultado.innerHTML = "⚠️ Hay personajes sin imagen"
}


})