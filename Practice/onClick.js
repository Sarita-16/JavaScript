document.addEventListener("click", clickHandler); // addEventListener() : method & click : event

function clickHandler() {
  let button = document.getElementById("count").innerHTML;
  document.getElementById("count").innerHTML = +button + 1; //(+button) = number
}
