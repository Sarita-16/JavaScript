// Closure : Function with it's Lexical Scope forms a Closure

function a() {
  var x = 25;
  function b() {
    console.log(x);
  }
  b();
}
a();

// Example of function can assign as a variable
var q = function p() {
  console.log("Example of function can assign as a variable.");
};
console.log(q);

// We can pass a function inside into a function as a parameter
function d(f) {
  var e = 9;
}
d(function r() {
  console.log("We can pass a function inside into a function as a parameter.");
});
console.log(d);

// Return function outside of a function
function s() {
  var t = 5;
  function u() {
    // Or we can also write --->
    console.log(t); // return function u(){ console.log(t) }
  }
  return u;
}
var v = s();
console.log(v);
v();

// Example of Closure
function x() {
  var a = 1;
  function y() {
    var b = 2;
    function z() {
      var c = 3;
      console.log("a : " + a + "\nb : " + b + "\nc : " + c);
    }
    z();
  }
  y();
}
x();
