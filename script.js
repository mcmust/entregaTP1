document.getElementById('imagen').addEventListener('change', function () {
  const fileChosen = document.getElementById('file-chosen');
  fileChosen.textContent = this.files.length > 0 ? this.files[0].name : 'No file chosen';
});

// Abre el menú al pasar el cursor sobre el botón de abrir menú
document
  .querySelector('.open-menu-btn')
  .addEventListener('mouseenter', function () {
    var menu = document.querySelector('.mobile-menu')
    menu.classList.add('active')
  })

// Cierra el menú cuando el mouse abandona el área del menú móvil
document
  .querySelector('.mobile-menu')
  .addEventListener('mouseleave', function () {
    var menu = this
    menu.classList.remove('active')
  })

function validateForm(event) {
  const nombre = document.getElementById('nombre').value
  const email = document.getElementById('email').value
  const mensaje = document.getElementById('mensaje').value
  const motivo = document.getElementById('motivo').value
  const imagen = document.getElementById('imagen').value
  const acepto = document.getElementById('acepto').checked

  if (!nombre || !email || !mensaje || !motivo || !imagen || !acepto) {
    alert('Por favor complete todos los campos.')
    event.preventDefault()
  } else {
    alert('El formulario se ha enviado correctamente.')
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los enlaces del menú
  const menuLinks = document.querySelectorAll('.mobile-menu a, .desktop-menu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Previene el comportamiento predeterminado del enlace

      // Obtiene el ID de la sección objetivo
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Calcula la posición de la sección ajustada para no quedar oculta bajo el header
      const offsetPosition = targetSection.offsetTop - document.querySelector('header').offsetHeight;

      // Desplazamiento suave a la posición calculada
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Cierra el menú móvil después de hacer clic si está abierto
      if (document.querySelector('.mobile-menu').classList.contains('active')) {
        document.querySelector('.mobile-menu').classList.remove('active');
      }
    });
  });
});

// Abre el menú al hacer clic en el botón de abrir menú
document.querySelector('.open-menu-btn').addEventListener('click', function() {
  var menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('active');
});

// Cierra el menú cuando el mouse abandona el área del menú móvil
document.querySelector('.mobile-menu').addEventListener('mouseleave', function() {
  var menu = this;
  menu.classList.remove('active');
});
