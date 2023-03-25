// 1.What is Callback function in JS
setTimeout(function () {
  // setTimeout() takes the callback function
  console.log("timer");
}, 5000);
function a(x) {
  console.log("a");
  x();
}
a(function b() {
  // 'function b()' : is a callback function
  console.log("b");
});

// 2.JS is a synchronous & single- threaded language
// 3.Blocking the main thread
// 4.Power of Callback

// 5.Deep about Event listeners
// 6.Closure Demo with Event listeners
// 7.Scope Demo with Event listeners
// 8.Garbage collection & remove Event listeners
