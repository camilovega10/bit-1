'use strict';

document.getElementById("formSuscripcion").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoPais = document.getElementById("codigoPais").value;

    if (correo && telefono) {
      alert(result);
      this.reset(); // Limpiar formulario
      window.location.href = "registro.html";
    } else {
      alert("Por favor completa todos los campos obligatorios.");
    }
  });