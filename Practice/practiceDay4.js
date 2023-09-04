// 1.Reverse a String : "Hello" --> "Olleh"
let reverseString = function(str){
    let string = str.split("").reverse().join("")       
    console.log("Reverse a String of  '" + str + "' is : " + string)
}
reverseString("Hello")


// 2.Reverse String : "Hello World" --> "Olleh Dlrow"
let stringReverse = function(str){       
    let string = str.split(" ").map(word => word.split("").reverse().join(""));
    //console.log(string)
    let rev = string.join(" ")
    console.log("Reverse word of a String sentence of  '" + str + "' is : " + rev)
}
stringReverse("Hello World")
