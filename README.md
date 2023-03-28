# JavaScript

JavaScript Practice Code

# script_1.js -->

Functions & ARROW FUNCTION

# script_2.js -->

Call Stack & Global Execution Context

# script_3.js -->

loosely type language

# script_4.js -->

Scope Chain & Lexical Environment

# script_5.js -->

let & const declaration
\\window.variable OR this.variable will not give value of variable defined using let or const

\\ SyntaxError : Missing inatialize
ex : const a \\ Here we will find this type of error cause we didn't initialize the value of a & there will not occure any duplicacy

\\ TypeError : Assingment to constant variable
ex : const a = 10 \\ It is a conts type. It should be initialize & declare together & we can't assign any value later on

\\ ReferenceError : Can not access before initialization
ex :
console.log(a)
let a = 10 \\ Here occure this type of error cause 'a' is in the Temporal Dead Zone

# or

console.log(x) \\ This is also reference error cause x is not define in code

# script_6.js

Block - BlockScope - Shadowing - Illegal Shadowing

# script_7.js

Closure : Closure is the combination of a function that bundled together with reference to its Lexical Environment.

\\ Use of Closure ----->

1. Module Design Pattern
2. Currying
3. Functions like once
4. Memoize
5. Maintaining state in async world
6. Set Time Outs
7. Iterators

# script_8.js

Currying --- > Using bind() method & Using closure function

# practiceDay1.js

1. Sum of 2 numbers using Function
2. Sum of array elements
3. Sum of arrays element using function Without passing Parameter
4. Sum of arrays element using function With passing Parameter
5. Insert in the begining of an Array \\ unshift() method add one or more new elements to the beginning of an Array & return a new Array
6. Insert at the end of an Array \\ push() method add one or more elements to the end of an Array & return a new Array
7. Insert in any position/middle of an Array \\ splice() method add or replace one or more elements to the in any position/middle of an Array

# script_9.js

setTimeout

# practiceDay2.js

1. Multiply each array elements by 2
2. Multiply each array elements by 2 using \\map() method
3. Find all elements that are greater than 99 in an Array
4. Find all elements that are greater than 99 in an Array using \\filter() method
5. Sort an Array Numbers(Ascending Order)
6. Sort an Array Numbers(Ascending Order & Descending Order) using \\sort() method

# practiceDay3.js

1. Create a calculator using Switch Statement : '+' '-' '\*' '/'
2. Convert Celsius to Fahrenheit
3. Find max & min numbers in an Array
4. Find max & min numbers in an Array using \\max() & \\min() method
   \\... -> spread operator : It unfolds an array. Math.max(...[1, 3, 2]) == Math.max(1, 3, 2)

# script_11.js

\\ Function Statement

\\ Function Expression

\\ Function Declaration

\\ Anonymous Function

\\ Named Function Expression

\\ Difference between Parameters & Arguments

\\ First Class Function

\\ Arrow Function

# practiceDay4.js

1. Reverse a String : "Hello" --> "Olleh"
   \\ split("") --> ["h", "e", "l", "l", "o"]
   \\ reverse() --> ["o", "l", "l", "e", "h"]
   \\ join("") --> "olleh"
2. Reverse String : "Hello World" --> "Olleh Dlrow"

# practiceDay4_calculator.js|.html

# practiceDay4_celsiusToFahrenheit.js|.html

# practiceDay5.js

1. Multiplication Table using for loop
2. Remove space from a String  
   \\'trim()' method removes whitespace from both sides of a string
   \\'replace()' method --> regex expression

# practiceDay5_multiplicationTable.js|html

# practiceDay6.js

1. Frequency of elements in an Array using for-each loop
2. Frequency of elements in an Array

# practiceDay7.js

1. Find occurence of all elements in an Array using forEach loop
2. Empty an Array using 4 methods
   \\ Assigning it to a new empty array
   \\ Setting its length to zero
   \\ Using splice() method
   \\ Using pop() method
3. Check if an integer is a number \\Number.isInteger() method : static method determines whether the passed value is an integer
4. Array check using \\ Array.isArray() method : static method determines whether the passed value is an Array
5. Suppose you have 2 arrays. Check 2 arrays are equal or not  
   \\every() method tests whether all elements in the array pass the test implemented by the provided function

# script_12.js

1. What is Callback function in JS : \\ A callback is a function passed as an argument to another function
   \\ setTimeout : 1 second = 1000 milliseconds.
2. JS is a synchronous & single- threaded language
3. Blocking the main thread
4. Power of Callback
5. Deep about Event listeners
6. Closure Demo with Event listeners
7. Scope Demo with Event listeners
8. Garbage collection & remove Event listeners

# practiceDay8.js

1. Find 2nd largest element from an Array
2. Remove duplicates from an Array using foreach & slice() method
3. Remove duplicates from an Array using set() method \\ set() method : create collections of unique values
