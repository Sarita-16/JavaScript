function outer(b){
    function inner(){
        console.log(a, b)
    }
    let a = 25
    return inner
}
let close = outer("Hello World")
close()
//outer()()
