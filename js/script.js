console.log('JS OK!')

/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const numberOne = document.getElementById('number-1');

const numberTwo = document.getElementById('number-2');

const numberThree = document.getElementById('number-3');

const numberFour = document.getElementById('number-4');

const numberFive = document.getElementById('number-5');

const numbersDivs = document.querySelectorAll('.number');


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
