const texto = document.getElementById("resultado")

fetch ('https://thesimpsonsapi.com/api/characters')
.then (Response => Response.json())
.then (data => { 

        const personajes = data.results

        const mujeres = data.results.filter((personajes)=>personajes.gender === "Female")

        texto.innerHTML = `Se encontraron ${mujeres.length} personajes mujeres`
        
        mujeres.forEach(elemento => {
    
        texto.innerHTML += `<p>${elemento.name}</p>` 
    
            
        });
        
        });

