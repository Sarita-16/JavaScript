console.log("***MY JAVASCRIPT PAGE***");
var x = 5;

function getName(){
    console.log("This is NORMAL FUNCTION. ");
}

var name = () => {
    console.log("It's an ARROW FUNCTION. When we will call it, it behaves like VARIABLE. ");
}

var getName1 = function(){
    console.log("This is NORMAL FUNCTION that is assign to a VARIABLE. ");
}


getName();
console.log(x);
console.log(getName);