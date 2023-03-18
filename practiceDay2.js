// 1.Multiply each array elements by 2
let multiplication = function (arr){
    let array=[]
    for(let i = 0; i < arr.length; i++){
        let mul = 2
       //mul = mul * arr[i]
        array[i] = mul * arr[i]
    }
    console.log("Multiply each array elements by 2 : " + array)
}
multiplication([1, 2, 3, 4, 5])



// 2.Multiply each array elements by 2 using map() method
let multiplication1 = function (arr){
   let mul = arr.map(m => m * 2)
    console.log("Multiply each array elements by 2 using 'map' method : " + mul)
}
multiplication1([1, 2, 3, 4, 5])




// 3.Find all elements that are greater than 99 in an Array
let greater = function(arr){
    let array = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 99){
            //console.log(arr[i])
            array[i] = arr[i]
        }
    }
    console.log("Elements that are greater than 99 in an Array : " + array)
}
greater([80, 99, 850, 456, 222, 1, 3069, 78])



// 4.Find all elements that are greater than 99 in an Array using filter() method
let larger = function(arr){
    let large = []  
    large = arr.filter(m => m > 99)
    console.log("Elements that are greater than 99 in an Array : " + large)
}
larger([80, 99, 85, 456, 222, 10, 369, 78])




// 5.Sort an Array Numbers(Ascending Order)
let sortNumbers = function(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
               // swap(array[i], array[j])
                let c = array[i]
                array[i] = array[j]
                array[j] = c
            }
        }
    }
    console.log("Sort an Array Numbers(Ascending Order) :  " + array)
}
/*      let swap = function(a, b){
    a = a+b
    b = a-b
    a = a-b
    return (a, b)
}           */
sortNumbers([90, 50, 40, 80, 20, 0, 10, 70])





// 6.Sort an Array Numbers(Ascending Order & Descending Order) using sort() method
let ascSortNumbers = function(array){    
    console.log("Sort an Array Numbers(Descending Order) using sort() method :  " + array.sort((a,b) => b-a))
    console.log("Sort an Array Numbers(Ascending Order) using sort() method :  " + array.sort((a,b) => a-b))
}
ascSortNumbers([90, 50, 40, 80, 20, 0, 10, 70])