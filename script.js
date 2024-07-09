function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // Pegar a tag img
  var img = document.querySelector("#profile img")
  // Condição: Se estiver no plano de fundo "LightMode", adicionar a imagem light, caso contrário, usar a imagem normal.
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  }else {
    img.setAttribute("src", "./assets/avatar.png")    
  }
}