const button = document.querySelector(".article__share");
const popup = document.querySelector(".article__popup");

button.addEventListener("click", () => {
  popup.classList.toggle("hidden");
  console.log("click");
});
