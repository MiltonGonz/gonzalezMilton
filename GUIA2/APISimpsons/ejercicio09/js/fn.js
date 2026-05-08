const resultado = document.getElementById("resultado")
fetch("https://thesimpsonsapi.com/api/characters")
  .then(response => response.json())
  .then(data => {

    data.results.slice(0, 8).forEach(personaje => {

      resultado.innerHTML += `
        <div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block;">
          <img src="https://thesimpsonsapi.com${personaje.portrait_path}">
          <p>${personaje.name}</p>
          <p>${personaje.occupation}</p>
          <p>${personaje.age}</p>
        </div>
      `
    })
  })
