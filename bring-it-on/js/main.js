// *Variables*
// Create a variable and console log the value
var num = 13
console.log(num) 
// Create a variable, add 10 to it, and alert the value
let num4 = 4
console.log(num4 + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4){
alert(num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder
function division(n1, n2){
return n1 % n2
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(n1, n2){
if (n1 + n2 > 50){
    alert('Jumanji')
}
}
addTwoAlertJumanji(43, 8)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function happy(n1,n2,n3){
    let product = n1 * n2 * n3
    if (product % 3 === 0 ){
        alert('zebra')
    }
}
happy(3,3,1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
