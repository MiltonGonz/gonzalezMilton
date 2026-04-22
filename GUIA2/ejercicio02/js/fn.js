//----------------------GUIA 2-----------------------
//----------------SIMPSONS API
//EJERCICIO 2
let texto = document.getElementById("resultado");


fetch ('https://thesimpsonsapi.com/api/characters')
.then(Response =>  Response.json())
.then(data => {
    
    //console.log(data.results.slice(0,5))
    data.results.slice(0,5).forEach(function(elemento) {

    texto.innerHTML += `<p>${elemento.name}</p>`;
});
});
