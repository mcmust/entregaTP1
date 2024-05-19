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
