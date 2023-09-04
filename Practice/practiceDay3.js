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
calculator(8.123, 0, '/')




// Convert  Celsius to Fahrenheit
let celsiusToFahrenheit = function(c){
    let f = c * (9/5) +32
    console.log(c + " ℃ = " + f + " ℉")
}
celsiusToFahrenheit(2)




// Find max & min numbers in an Array
let findMaxMin = function(array){
    let max = array[0]
    for(let i = 1; i < array.length; i++){ 
        if(max < array[i]){
            max = array[i]            
        }
    }
    console.log("Maximum number of an Array is : " + max)
    let min = array[0]
    for(let i = 1; i < array.length; i++){ 
        if(min > array[i]){
            min = array[i]            
        }
    }
    console.log("Minimum number of an Array is : " + min)
}
findMaxMin([8, 0, 95, 6, 42, 25, 125, 44])




// Find max & min numbers in an Array using max() & min() method
let maxMin = function(array){
    let max = Math.max(...array)  // ... -> spread operator - unfolds an array, Math.max(...[1, 3, 2]) == Math.max(1, 3, 2)
    console.log("Maximum number of an Array using max() method is : " + max)
    let min = Math.min(...array)
    console.log("Minimum number of an Array using min() method is : " + min)
}
maxMin([8, 10, 95, 6, 425, 25, 125, 44])

