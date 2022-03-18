console.log('JS OK!')

/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// prendo il container dei numeri

const container = document.querySelector('.container');

// prendo i div che comunica il punteggio

const scoreCounter = document.querySelector('.result-message');

scoreCounter.style.display = 'none';


// prendo tutti i div contenenti i numeri
const numberOne = document.getElementById('number-1');

const numberTwo = document.getElementById('number-2');

const numberThree = document.getElementById('number-3');

const numberFour = document.getElementById('number-4');

const numberFive = document.getElementById('number-5');


// elementi contenuti nell'array
const arraysLength = 5;

// creo un array dove inserire i 5 numeri casuali  
const numbersArray = [];


//finchè il numero di elementi nell'array sarà minore di 5
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


// creo un propt subito dopo la scomparsa dei numeri

// dichiaro il punteggio a 0
let punteggio = 0;

// creo l'intervallo
const showPrompt = setInterval(() => {

    // creo un ciclo che per 5 volte...
    for (let n = 0; n < 5; n++){

        // ...crea 1 prompt che siano numeri
        let numbersCreated = onlyNumberPrompt('Inserisci un numero');

        // dichiaro il valore dei numeri all'interno dell'array
        let numberPosition = numbersArray[n];

        // creo un ciclo
        if (numbersCreated === numberPosition) {  // se il numero generato è uguale al numero all'interno dell'array
            
            // il punteggio si incrementa
            punteggio++
            
            console.log(punteggio);

            //chiudo il timing del prompt
            clearInterval(showPrompt);

            // aggiungo del testo al div del punteggio
            scoreCounter.innerText = 'SCORE:' + ' ' + punteggio;

            // lo rendo visibile 
            scoreCounter.style.display = 'block';

            //infine mostro di nuovo i numeri
            container.style.display = 'flex';

        } else (numbersCreated != numberPosition); {                                   // altrimenti, se il numero aggiunto NON è all'interno dell'array

            console.log('sbagliato');
            
            // chiudo il timing del prompt
            clearInterval(showPrompt);
            
            // rendo il div del punteggio visibile
            scoreCounter.style.display = 'block';
            
            // aggiungo del testo al div del punteggio
            scoreCounter.innerText = 'SCORE:' + ' ' + punteggio;

            // mostro di nuovo i numeri
            container.style.display = 'flex';

            
        }

        

        
    }
    // e alla fine del ciclo, 
    //dopo aver inserito tutti i numeri col prompt, finisco il timing dei numeri e li rendo di nuovo visibili
    clearInterval(noShowNumbers);
}, 30500);


