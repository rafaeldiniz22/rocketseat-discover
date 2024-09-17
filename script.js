function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Desktop/avatar.png?v=" + Date.now()); // Adiciona um timestamp à URL
    img.setAttribute(
      "alt",
      "Foto de Rafael Diniz de Perfil usando óculos e camiseta cinza, além de boné e fundo escuro."
    );
  } else {
    img.setAttribute("src", "./assets/Desktop/avatar-light.png?v=" + Date.now()); // Adiciona um timestamp à URL
    img.setAttribute(
      "alt",
      "Foto de Rafael Diniz de Perfil usando óculos e camiseta cinza, com as duas mãos apontando para a cabeça e fundo branco."
    );
  }
}