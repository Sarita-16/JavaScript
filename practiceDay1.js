// Sum of 2 numbers using Function
let sum = function(a, b){
    alert(a + b)
    console.log("Sum of 2 numbers using Function : " + (a + b))
}
sum(5, 8)


// Sum of array elements
let arr = [25, 8, 45, 4, 5]
let arraySum = 0
for(i = 0; i < arr.length; i++){
    arraySum = arraySum + arr[i]
}
console.log("Sum of array elements : " + arraySum)


// Sum of arrays element using function Without passing Parameter
let array = [1, 2, 3, 4, 5, 6, 7, 8]
function sumWithoutParam(){
    let s = 0
    for(i = 0; i < array.length; i++){
        s = s + array[i]
    }
    console.log("Sum of arrays element using function : " + s)
}
sumWithoutParam()


// Sum of arrays element using function With passing Parameter
let sumWithParam = function(array){
    let sum = 0
    for(i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    console.log("Sum of arrays element using function : " + sum)
}
sumWithParam([3, 4, 5, 6, 7, 8])


// Insert in the begining of an Array
let insertBegining = function(array, a, b){
    array.unshift(a,b)    
    console.log("Insert in the begining of an Array :   " + array)
}
insertBegining([2, 4, 6, 8, 10, 12, 14], 0, 16)


// Insert at the end of an Array
let insertEnd = function(array, key){
    array.push(key)    
    console.log("Insert in the end of an Array :    " + array)
}
insertEnd([10, 20, 30, 40, 50, 60, 70], 80)


// Insert in any position/middle of an Array
let insertAnyPosition = function(array, key1, key2){
    //array.splice(2, 0, key)
    array.splice(4, 1, key1, key2)
    console.log("Insert in any position/middle of an Array :    " + array)
}
insertAnyPosition([5, 9, 3, 0, 7, 6, 1], 8, 10)

