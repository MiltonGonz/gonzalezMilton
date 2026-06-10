function buscar() 
{
  const resultado = document.getElementById("resultado");
  const nombre = document.getElementById("input").value.trim();

  fetch(`https://rickandmortyapi.com/api/character?name=${nombre}`)
    .then(response => response.json())
    .then(data => {

      const personajes = data.results;

      resultado.innerHTML = ""; 
      personajes.forEach(personaje => {
        resultado.innerHTML += `
          <div>
            <img src="${personaje.image}" alt="${personaje.name}" width="100" />
            <p>${personaje.name}</p>
            <p>${personaje.status}</p>
          </div>
        `;
      });

    });
}
