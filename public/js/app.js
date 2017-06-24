$(document).foundation()

function openOption(ev, optionName) {
  console.log(optionName)

  // Esconde todos los elementos con la clase tabcontent
  const tabcontent = document.querySelectorAll('.tabcontent')
  
  tabcontent.forEach((content) => {
    content.style.display = 'none'
  })

  // Quita la clase activa del tab que la tenga
  const tablinks = document.querySelectorAll('.tablinks')
  
  tablinks.forEach((tab) => {
    tab.className = tab.className.replace(' active', '')
  })

  // Muestra el contenido del tab seleccionado, y agrega la clase activa al tab que corresponde
  // document.getElementsByClassName(optionName).style.display = 'block'
  ev.currentTarget.className += ' active'
}