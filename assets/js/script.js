const tabs = document.querySelectorAll(".tab-btn");
const body = document.body; // Pega o <body> aqui!

tabs.forEach((tab) => tab.addEventListener("click", () => tabClicked(tab)));

const tabClicked = (tab) => {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => content.classList.remove("show"));

  const contentId = tab.getAttribute("content-id");
  const content = document.getElementById(contentId);

  content.classList.add("show");

  // Aqui que a magia acontece ✨
  body.classList.remove("bg-mito", "bg-insanity");

if (contentId === "mito") {
    body.classList.add("bg-mito");
  } else if (contentId === "mr-insanity") {
    body.classList.add("bg-insanity");
  }

  // 👇 Só se quiser destacar o botão clicado:
  tabs.forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
};
