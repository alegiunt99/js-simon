console.log('JS OK!')

/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// prendo il container dei numeri

const container = document.querySelector('.container');

// prendo i div che comunica il risultato

const scoreCounter = document.querySelector('.result-message');

scoreCounter.style.display = 'none';


// prendo tutti i div contenenti i numeri
const numberOne = document.getElementById('number-1');

const numberTwo = document.getElementById('number-2');

const numberThree = document.getElementById('number-3');

const numberFour = document.getElementById('number-4');

const numberFive = document.getElementById('number-5');

const numbersDivsCell = document.querySelectorAll('.number');




console.log(numbersDivsCell);
// elementi contenuti nell'array
const arraysLength = 5;

// creo un array dove inserire i 5 numeri casuali  
const numbersArray = [];



while (numbersArray.length < arraysLength) {

    //creo i numeri casuali
    let randomNumbers = generateRandomNumber(1, 100);


    // se un numero è già presente nell'array ne genero altri
    if (numbersArray.includes(randomNumbers)) {

        randomNumbers = generateRandomNumber(1, 100);
    } else {
        
        // altrimenti l'aggiungo all'array
        numbersArray.push(randomNumbers);
    }

}

console.log(numbersArray);

// una volta che genero tutti i numeri, li aggiungo ai div come testo

numberOne.innerText = numbersArray[0];

numberTwo.innerText = numbersArray[1];

numberThree.innerText = numbersArray[2];

numberFour.innerText = numbersArray[3];

numberFive.innerText = numbersArray[4];

// creiamo un timing che faccia scomparire i numeri dopo 30 secondi

const noShowNumbers = setInterval(function () {

container.style.display = 'none';

    

    
}, 30000)


// creo un propt che permetta all'utente di inserire i numeri e ricordarli

const showPrompt = setInterval(() => {
    for (let n = 0; n < 5; n++){
        
        let punteggio = 0;

        // creo 5 prompt che siano numeri
        let numbersCreated = onlyNumberPrompt('Inserisci un numero');

        let numberPosition = numbersArray[n];

        let numbersDivs = numbersDivsCell[n];

        console.log(numbersDivs);

        numbersDivs.display = 'block';

        if (numbersCreated !== numberPosition) {
            
            punteggio = 0

            console.log('sbagliato');

            clearInterval(showPrompt);

            scoreCounter.style.display = 'block';

            container.style.display = 'flex';

        } else {

            punteggio++
            
            console.log('giusto');
            clearInterval(showPrompt);

            scoreCounter.innerText = 'SCORE:' + '' + punteggio;

            scoreCounter.style.display = 'block';

            container.style.display = 'flex';
        }
    }
    clearInterval(noShowNumbers);
}, 30500);

