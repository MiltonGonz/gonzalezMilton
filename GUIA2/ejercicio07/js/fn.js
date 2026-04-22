let personajes = []

fetch ('https://thesimpsonsapi.com/api/characters')
.then (Response => Response.json())
.then (data => {

    personajes = data.results

})

function buscar () 
{
    let texto = document.getElementById("n1").value

    let resultado = document.getElementById("resultado");

    let existe = personajes.some(function(p) 
    {
    return p.occupation.toLowerCase() === texto.toLowerCase();
    });

    


    if (existe) 
    {
    resultado.innerHTML = "✅ Sí, existe un personaje con esa ocupación"
    } else 
    {
    resultado.innerHTML = "❌ No se encontró ninguno"
    }

}


