// Closure : Function with it's Lexical Scope forms a Closure

function a(){
    var x = 25
    function b(){
        console.log(x)
    }
    b()
}
a()


// Example of function can assign as a variable
var q = function p(){
    console.log("Example of function can assign as a variable.")
}
console.log(q)


// We can pass a function inside into a function as a parameter
a(function r(){
    console.log(x)
    console.log("We can pass a function inside into a function as a parameter.")
})


// Return function outside of a function
function s(){
    var t = 5
    function u(){
        console.log(t)
    }
    return u
}
s()