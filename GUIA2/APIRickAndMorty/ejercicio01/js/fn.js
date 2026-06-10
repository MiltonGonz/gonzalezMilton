const resultado = document.getElementById("resultado")

fetch ('https://rickandmortyapi.com/api/character')
.then (response => response.json())
.then (data => {

    resultado.innerHTML = data.results[0].name

})