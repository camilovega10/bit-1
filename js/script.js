'use strict';
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("registroForm");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const nombre = document.getElementById("name").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("password").value.trim();
    const confirmar = document.getElementById("confirmar").value.trim();

    // Verificar que todos los campos estén completos
    if (!nombre || !correo || !contraseña || !confirmar) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (contraseña !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Mostrar alerta si todo está correcto
    alert("Registro exitoso. ¡Bienvenido/a " + nombre + "! ahora podras disfrutar de los mejores precios y la mejor calidad, ¡Recuerda que tu usuario es el correo y la contraseña es la que acabas de crear!");
    formulario.reset(); // Limpia el formulario después de enviar
  });
});






