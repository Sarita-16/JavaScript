// Create a calculator using Switch Statement : + - * /
let calculator = function(a, b, operation){
    let c
    switch (operation){
        case '+' :
            c = a+b
            console.log("Addition of 2 elements : " + c)
            break

        case '-' :
            c = a-b
            console.log("Subtraction of 2 elements : " + c)
            break

        case '*' :
            c = a*b
            console.log("Multiplication of 2 elements : " + c)
            break

        case '/' :
            c = a/b
            console.log("Division of 2 elements : " + c)
            break
        
        default :
            console.log("Enter valid operation. ")
            break
    }
}


/*      var firstNumber = sessionStorage.getItem("fno");
console.log(fno);

var secondNumber = sessionStorage.getItem("sno");
console.log(sno);

var operation = sessionStorage.getItem("ope");
console.log(ope);           */


var fno = document.getElementById('fno').value
var sno = document.getElementById('sno').value
var ope = document.getElementById('ope').value

//document.getElementById('here').innerHTML = b;

calculator(fno, sno, ope)