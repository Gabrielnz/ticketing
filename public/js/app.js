$(document).foundation()

var query = window.matchMedia('(max-width: 39.9375em)')
var menu = document.getElementById("offCanvas-menu")

function showMenu() {
  menu.classList.add("offCanvas-active");
}

function hideMenu() {
  menu.classList.remove("offCanvas-active");
}

function mediaQuery() {
  if (query.matches) {
    // si se cumple el media query
    // gestos touch
    var body = document.body
    var gestures = new Hammer(body)

    gestures.on('swipeleft', hideMenu)
    gestures.on('swiperight', showMenu)
  }
}

query.addListener(mediaQuery)
mediaQuery()