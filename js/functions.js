// functions

function generateRandomNumber(min, max){
    const range = max - min + 1;

    return Math.floor(Math.random()*range) + min;

}


function onlyNumberPrompt(message) {

    let numbersAdded = parseInt(prompt(message));

    if (!isNaN(numbersAdded)) {
        
        return numbersAdded;
    }
}