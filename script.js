function toggleMode() {
  const html = document.documentElement
  // Condição para alternar entre o dark e o light mode adicionando
  // e removendo dependendo do click do botão
  html.classList.toggle("light")
  //pegar a tag img no css

  const img = document.querySelector("#profile img")
  {
    //substituir a imagem
  }
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto do Mayk de óculos")
  } else {
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo")
  }
}
