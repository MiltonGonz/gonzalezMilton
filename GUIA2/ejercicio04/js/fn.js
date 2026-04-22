 const texto = document.getElementById("resultado")

fetch ('https://thesimpsonsapi.com/api/characters')
.then (Response => Response.json())
.then (data => {

    const personajes = data.results

    personajes.slice(0,20).forEach(elemento => {

        texto.innerHTML += `<p>${elemento.name} ------ ${elemento.occupation}</p>`
        
    });

})