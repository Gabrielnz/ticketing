$(document).foundation()

/* function toggleContent(contentId) {
  // Esconde todos los elementos con la clase content
  const content = document.querySelectorAll('.content')
  
  content.forEach((content) => {
    content.style.display = 'none'
  })

  // Muestra el contenido deseado
  document.getElementById(contentId).style.display = 'block'
}

// Funcion que es invocada al seleccionar una opcion de la pagina principal
function openOption(ev, contentId) {

  toggleContent(contentId)

  // Quita la clase activa del tab que la tenga
  const tablinks = document.querySelectorAll('.tablinks')
  
  tablinks.forEach((tab) => {
    tab.className = tab.className.replace(' active', '')
  })

  // Agrega la clase activa al tab que corresponde
  ev.currentTarget.className += ' active'
}

// Funcion que es invocada al seleccionar la opcion de agregar evento
function addEvent(ev, contentId) {
  toggleContent(contentId)
}*/