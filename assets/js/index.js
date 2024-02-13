//Para tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
  /*Smooth scroll - Selector por clase*/
  $(".nav-link").click('click', function (event) {
    if (this.hash !== "") {     //Mientras href tenga valor
      event.preventDefault();   //Evita el comportamiento por defecto (salto al enlace)
      var hash = this.hash;     //Asigna el valor de href a hash
      /*selector por etiqueta*/
      $('html, body').animate({ //Le da animación de desplazamiento en 8 segundos
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash; //Se desplaza
      });
    }
  });

});

/*alert de envio - Selector por id
  $("#enviarMensaje").click(function () {
    alert("El mensaje fue enviado correctamente.");
});*/