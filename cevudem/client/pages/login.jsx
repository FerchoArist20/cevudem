const loginForm = document.querySelector('form');
const errorMsg = document.querySelector('#error-msg');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  
  if (username === 'exampleuser' && password === 'examplepassword') {
    // Usuario y contraseña correctos
    alert('Inicio de sesión exitoso');
  } else {
    // Usuario y/o contraseña incorrectos
    errorMsg.innerText = 'Usuario y/o contraseña incorrectos';
    errorMsg.style.display = 'block';
  }
});
