// blocks are defined by {} 
// block is also known as 'Compound Statement'
// block is used to combine multiple JavaScript statements into one group  

if(true)
{
    var x = 50
    console.log(x)
}

// Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
// 'let' & 'const' are block scope. That means they are stored in a separate memory space which is reserved for this block
// We can not access 'let' & 'const' outside of the block that is called 'let' & 'const' are in block scope
// Shadowing process : 1

var a = 100
let b = 200
const c = 300
{
    var a = 10
    let b = 20
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b)
console.log(c)

// Shadowing process : 2
const s = 25
function shadowing(){
    const s = 55
    console.log(s)
}
shadowing()
console.log(s)

// Shadowing process : 3
var i = 40
{
    let i = 44
    console.log(i)
}


// Illegal Shadowing : If we want to shadow 'let' veriable inside blockScope using a 'var' we can't do that. 
let j = 80
{
    let j = 88
}

let k = 20
function NoIllegalShadowing(){
    var k = 22
}

// BlockScope also follow Lexical Scope
// Each and every block has it's own lexical scope
const l = 1
{
    const l = 2
    {
        const l = 3
        {    
            const l = 4
            console.log(l)            
        }
        console.log(l)
    }
    console.log(l)
}
console.log(l)

