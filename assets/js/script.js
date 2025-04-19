
emailjs.init("2D4FBjCWNvCy7ELkP"); // Tu public key
        
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_h0qaek9", "template_33flc98", form)
      .then(function(response) {
        document.getElementById('response').innerText = "¡Mensaje enviado con éxito!😉";
        form.reset();
      }, function(error) {
        document.getElementById('response').innerText = "Hubo un error al enviar el mensaje.";
        console.error("Error al enviar el correo:", error);
      });
  });
});

