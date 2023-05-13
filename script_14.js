// *------------------------------------ WEB APIs ------------------------------------------*

console.log("Start");

// Set Time Out
setTimeout(function cbT() {
  console.log("Call Back Timeout");
}, 5000);

//DOM API = Document Object Model
document.getElementById("clickMe").addEventListener("click", function cb() {
  console.log("Click Me Call Back Function ");
});

// Microtask Queue has higher priority than CallBack Queue ot Task Queue
// fetch()
fetch("https://www.youtube.com/").then(function cbF() {
  console.log("Call Back Function YouTube");
});

// 'cbF' in the Microtask Queue & 'cbT' in CallBack Queue

console.log("End");
