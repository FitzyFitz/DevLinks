function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  //const alt = document.querySelector("#profile alt")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Senku-light-mode.jpg")
    img.setAttribute("alt", "Foto do usuário light mode")
  } else {
    img.setAttribute("src", "./assets/Senku-dark-mode.jpg")
    img.setAttribute("alt", "Foto do usuário dark mode")
  }
}
