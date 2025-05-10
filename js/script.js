'use strict';

/*validacion del formulario de registro*/
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Revisa campos antes de que se envie

    const name = document.getElementById('name').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (name && message) {
      const result = `${name}, gracias por tu registro con el correo: "${correo}". ya puedes iniciar sesion desde la opcion en la pagina principal, donde tu usuario es tu correo y la contraseña que acabas de crear`;
      alert(result);
      this.reset(); // Limpiar formulario
    } else {
      alert("Por favor completa todos los campos obligatorios.");
    }
  });






