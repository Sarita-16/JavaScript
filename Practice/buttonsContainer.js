function buttonClick() {
  let button = document.getElementById("btn5");
  button.setAttribute("click", "rotated-image");
}
let button = document.getElementById("btn5");
button.onclick = function () {
  document.getElementById("btn5").className = "rotated";
};
