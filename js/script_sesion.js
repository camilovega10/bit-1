'use strict';
/*Validacion del inicio de sesion*/
  document.getElementById('iniciosesionform').addEventListener('submit', function (e) {
  e.preventDefault(); // Revisa campos antes de que se envie

  const correo = document.getElementById('correo').value.trim();

  if (correo) {
    alert(`¡¡Bienvenido "${correo}" de nuevo a LU´CAM!!`);
    this.reset(); // Limpiar formulario
    
  } else {
    alert("Por favor ingresa tu correo.");
  }
});