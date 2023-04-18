const form = document.querySelector('form');
const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (username.value === '' || password.value === '') {
    alert('Por favor ingrese un nombre de usuario y contraseña válidos.');
  } else {
    alert('Bienvenido!');
  }
});