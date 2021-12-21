const share = document.querySelector(".tulip");
const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  share.classList.toggle("clicked");
});
