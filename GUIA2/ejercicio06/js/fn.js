let personajes = []

fetch('https://thesimpsonsapi.com/api/characters')  
  .then(response => response.json())
  .then(data => {
    personajes = data.results
  })

function buscar() 
{


  let texto = document.getElementById("n1").value


  let encontrado = personajes.find(function(p) 
  {
    return p.name.toLowerCase() === texto.toLowerCase()
  })


  let resultado = document.getElementById("resultado")

    if (encontrado) 
  {
      resultado.innerHTML = encontrado.name + ' | ' + encontrado.occupation + ' | Edad: ' + encontrado.age
    } else 
  {
      resultado.innerHTML = 'Personaje no encontrado'
    }

  }