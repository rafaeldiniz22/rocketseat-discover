function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Método If e Else

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Desktop/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Rafael Diniz de Perfil usando óculos e camiseta cinza, além de boné e fundo escuro."
    )
  } else {
    //Se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Desktop/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Rafael Diniz de Perfil usando óculos e camiseta cinza, com as duas mãos apontando para a cabeça e fundo branco."
    )
  }
}
