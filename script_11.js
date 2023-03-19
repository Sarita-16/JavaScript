// Function Statement aka Function Declaration
function statement(){
    console.log("Call Function Statement 😉. We can call it before declare the function.")
}
statement()



// Function Expression
let exp = function(){       // Anonymous Function
    console.log("Call Function Expression 😎. It acts like variable & can't call it before the function declaration.")      
}
exp()



// Anonymous Function : Function without any name. It doesn't have their own identity. It is a type of Function Statement. 
const variable = function (){
    console.log("Call Anonymous Function 😊. It is used in a place where function are used as a value.")
}
variable()



// Named Function Expression
let named = function exp(){
    console.log("Call Named Function Expression 😋.\n" + exp)
}
named()



// Difference between Parameters & Arguments
let func = function(parameter){     // Parameter
    console.log("Argument pass into parameter " + parameter)
}
func('😁.')   // Arguments



// First Class Function aka First Class Citizen : In JS when they are treated as a value pass into a function & return from an another function, like argument.
let firstClass = function(parameter){
    return function func(){

    }
}
console.log("Call First Class Function 😚.\n" + firstClass())



// Arrow Function

