//1. Create a function called divide that takes 2 numbers as parameters. The function should divide the first number by the second number and return the result. If the second number is a 0, the function should throw an Error object.


const divide = (num1, num2) => {
    if(num2 == 0){
        throw new Error("please enter a number other than 0")
    }
    return num1 / num2
}
// console.log(divide(6, 0))

//2.
// let myAnswer;
try{
myAnswer = divide(5, 0)
}
catch(e){
console.log(e.message)
}
finally{
    // if(!myAnswer){
    //     myAnswer = 0
    // }
}

// console.log(myAnswer)
console.log("I really hope this is working")

