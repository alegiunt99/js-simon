// functions

function generateRandomNumber(min, max){
    const range = max - min + 1;

    return Math.floor(Math.random()*range) + min;

}
