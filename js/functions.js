// functions

function generateRandomNumber(min, max){
    const range = max - min + 1;

    return Math.floor(Math.random()*range) + min;

}


function onlyNumberPrompt(message) {

    let numbersAdded = parseInt(prompt(message));

    while (isNaN(numbersAdded)) {
        
        numbersAdded = parseInt(prompt(message));

        return console.log('non hai inserito un numero');
    
    }

    return numbersAdded;
}