const boton = document.querySelector('#boton');
const card = document.getElementById('card');
let user = {}; // Cambia User a user para que coincida con el nombre de la variable

fetch('https://randomuser.me/api/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    user = data.results[0]; // Los datos se encuentran en data.results
    generarUsuario(); // Llama a la función para mostrar el usuario después de obtener los datos
  })
  .catch(error => {
    console.error(error);
  });

function generarUsuario() {
  card.innerHTML = '';
  card.innerHTML += `<div class="card text-bg-dark">
    <img src="${user.picture.medium}" class="card-img" alt="...">
    <div class="card-img-overlay">
      <h5 class="card-title">${user.name.first} ${user.name.last}</h5> <!-- Mostrar nombre y apellido -->
      <p class="card-text">${user.email}</p> <!-- Usar user en lugar de userdatos -->
      <p class="card-text"><small>${user.phone}</small></p>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', generarUsuario);

boton.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      user = data.results[0];
      generarUsuario();
    })
    .catch(error => {
      console.error(error);
    });
});


