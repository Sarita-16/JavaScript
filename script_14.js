console.log("Start");

setTimeout(function cb() {
  console.log("CallBack");
}, 5000);

document.getElementById("clickMe").addEventListener("click", function cb() {
  //.addEventListener = DOM API
  console.log("Click Me Call Back Function ");
});

console.log("End");
