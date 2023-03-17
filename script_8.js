// Currying : Currying doesn’t call a function. It just transforms it.
// Example : 1 using bind() method

let multiply = function(a, b){
    console.log(a * b)
}


let multiplyByTwo = multiply.bind(this, 2)         // bind() method essentially create a copy of this multiply() method     \\ 2 = a
        // When we call the bind() method it actually gives us copy of this multiply() method & it does not invoke it directly
multiplyByTwo(5)        // 5 = b


let multiplyBySix = multiply.bind(this, 6)    // a = 3
multiplyBySix(8)      // b = 8


let multiplyByFour = multiply.bind(this, 4, 7)    // a = 4 & b = 7
multiplyByFour()


let multiplyByThree = multiply.bind(this, )   
multiplyByThree(3, 1)       // a = 3 & b = 1




// Example : 2 using closure function
let sum = function(x){
    return function (y){
        console.log(x + y)
    }
}

let sumOfEight = sum(8)     // x = 8
sumOfEight(5)       // y = 5



// Example : 2 using function currying syntax
let s = function(x){
    return function (y){
        return x + y
    }
}
let sumOfTen = s(10)(5)   // x = 10 & y = 5
console.log(sumOfTen)
