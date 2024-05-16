// Open the menu when hovering over the open-menu-btn
document
  .querySelector('.open-menu-btn')
  .addEventListener('mouseenter', function () {
    var menu = document.querySelector('.mobile-menu')
    menu.classList.add('active')
  })

// Close the menu when the mouse leaves the mobile-menu area
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
    alert('El formulario se ha enviado.')
  }
}
