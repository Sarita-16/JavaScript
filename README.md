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

# practice.js

1. Sum of 2 numbers using Function
2. Sum of array elements
3. Sum of arrays element using function Without passing Parameter
4. Sum of arrays element using function With passing Parameter
5. Insert in the begining of an Array \\ unshift() method add one or more new elements to the beginning of an Array & return a new Array
6. Insert at the end of an Array \\ push() method add one or more elements to the end of an Array & return a new Array
7. Insert in any position/middle of an Array \\ slice() method add or replace one or more elements to the in any position/middle of an Array
