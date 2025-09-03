document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");
  const texto = document.getElementById("texto");

  botao.addEventListener("click", () => {
    texto.textContent =
      texto.textContent === "Confira os principais eventos do mês!"
        ? "Novo evento em breve, fique ligado!"
        : "Confira os principais eventos do mês!";
  });
});
