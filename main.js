document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const btnTopo = document.getElementById("btnTopo");
  const btnTema = document.getElementById("btnTema");
  const logo = document.querySelector(".logo");

  // Carregar tema salvo
  const temaSalvo = localStorage.getItem("theme");
  if (temaSalvo) {
    html.setAttribute("data-theme", temaSalvo);
    btnTema.textContent = temaSalvo === "dark" ? "☀️" : "🌙";
  }

  // Alternar tema ao clicar no botão
  btnTema.addEventListener("click", () => {
    const temaAtual = html.getAttribute("data-theme");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", novoTema);
    localStorage.setItem("theme", novoTema);
    btnTema.textContent = novoTema === "dark" ? "☀️" : "🌙";
  });

  // Alternar tema clicando na logo também (opcional)
  logo.addEventListener("click", () => btnTema.click());

  // Mostrar botão voltar ao topo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  // Scroll suave ao topo
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Parallax background simples na hero
  const hero = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
  });
});
// JS/main.js
// Fim do código JS