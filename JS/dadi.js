/*----------------------------
ESERCIZIO 1 - Gioco dei dadi
------------------------------
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

//TODO       FASE PREPARATORIA
//Ricupero gli ellementi della pagina di mio interesse
const result = document.getElementById('result');
const dadi = document.getElementById('dadi');

//TODO       FASE DE ELABORAZIONE
//Generare un numero random da 1 a 6
const playerNumber = Math.floor(Math.random()*6)+1;
const pcNumber = Math.floor(Math.random()*6)+1;

let dadiResult = `<p> il valore del giocatore è uguale a : ${playerNumber} </p>
                  <p> il valore del Computer è uguale a : ${pcNumber} </p>`

//TODO       CALCOLO
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
let message = 'Entrambi sono uguali, non ha vinto nessuno dei due!';

if(playerNumber > pcNumber ){
    message =  'Ha vinto il Giocatore!'
}else if(pcNumber > playerNumber){
    message = 'Ha vinto il Computer!'
}
console.log(message);
//TODO       OUTPUT
//Stampiamo in pagina i due tiri e il risultato
dadi.innerHTML = dadiResult;
result.innerText = message;


