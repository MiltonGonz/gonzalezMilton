const texto = document.getElementById("resultado")

fetch('https://thesimpsonsapi.com/api/characters')
  .then(response => response.json())
  .then(data => {

    const conteo = data.results.reduce(function(acumulador, personaje) {
      acumulador[personaje.gender] = (acumulador[personaje.gender] || 0) + 1
      return acumulador
       }, {})   

    texto.innerHTML += `Masculino: ${conteo["Male"]} personajes <br>`
    texto.innerHTML += `Femenino: ${conteo["Female"]} personajes <br>`

})
