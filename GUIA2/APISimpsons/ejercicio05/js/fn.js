const texto = document.getElementById("resultado")

fetch ('https://thesimpsonsapi.com/api/characters')
.then (Response => Response.json())
.then (data =>
{

        const personajes = data.results

        const mayorEdad = personajes.reduce((mayor, actual) => {
        return actual.age > mayor.age ? actual : mayor;
        });

        texto.innerHTML = `El personaje de mayor edad es ${mayorEdad.name} con ${mayorEdad.age} años`
})