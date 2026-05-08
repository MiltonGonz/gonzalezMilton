const texto = document.getElementById("resultado")

fetch ('https://thesimpsonsapi.com/api/characters')
.then (response => response.json())
.then (data => {

const conEdad = data.results.filter(function(p) {
      return p.age !== null
    })

const ordenados = conEdad.sort((a, b) => a.age - b.age)

    ordenados.slice(0,5).forEach(element => {

        texto.innerHTML += `Nombre: ${element.name} | Edad: ${element.age} <br>` 
        
    })

})
