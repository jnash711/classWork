//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
const age = document.querySelector('#danceDanceRevolution').value
const checkButton = document.querySelector('h1')
checkButton.addEventListener('click', doWork)

function doWork(age){
    if (age < 16){
        console.log('They can not drive')
    }else if (age < 18){
        console.log('they cant hate from outside the club, they cant get in')
    }else if (age < 21){
        console.log('you can not drink')
    }else if (age < 25){
        console.log('you cant rent fancy cars affordably')
    }else if (age > 30){
        console.log('there is nothing left to look forward too')
    }else {
        console.log('bye')
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
