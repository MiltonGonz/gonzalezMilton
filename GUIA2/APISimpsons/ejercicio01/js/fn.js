//----------------------GUIA 2-----------------------
//----------------SIMPSONS API
//EJERCICIO 1
let texto = document.getElementById("resultado");



fetch ('https://thesimpsonsapi.com/api/characters')
.then(Response =>  Response.json())
.then(data =>  texto.innerHTML = data.results[0].name)



