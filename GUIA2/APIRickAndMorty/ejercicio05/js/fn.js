const resultado = document.getElementById("resultado")

function buscar() 
{

const id = document.getElementById("n1").value

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {

      resultado.innerHTML = `
        <img src="${data.image}">
        <p>Nombre: ${data.name}</p>
        <p>Estado: ${data.status}</p>
      `
    })

      .catch(() => {
      resultado.innerHTML = "<p>No encontrado</p>"

    })
}