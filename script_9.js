
/*
function a(){
    let i = 5
    setTimeout(function (){
        console.log(i)
    }, 3000)        // after 3000 milliseconds it will print i
    console.log("Namaste 🙏🏻 JavaScript")
}
a()         */


/*
// Using 'let' veriable
function x(){
    for(let i = 1; i <= 5; i++){            // We use let cause it is a block scope & it creates a new copy every time
        setTimeout(function (){
            console.log(i)
        }, i * 1000)
    }
}
x()         */


// Using 'var' 
function a(){
    for(var i = 0; i <= 5; i++){
        function close(a){
            setTimeout(function (){
                console.log(a)
            }, a * 1000)
        }
        close(i)
    }
}
a()