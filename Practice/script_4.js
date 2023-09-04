// Scope Chain

// GEC Lexical Environment = NULL

function a(){   // a() Lexical Environment = Local memory + GEC Lexical Environment
    var b = 10

    c()
    function c(){       // c() Lexical Environment = Local memory + a() Lexical Environment
        console.log(b)
    }
}

a() 
