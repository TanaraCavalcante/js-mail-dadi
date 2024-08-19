/*----------------------------
ESERCIZIO 1 - Gioco dei dadi
------------------------------
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

//TODO       FASE PREPARATORIA
//Ricupero gli ellementi della pagina di mio interesse

//TODO       FASE DE ELABORAZIONE
//Generare un numero random da 1 a 6
const playerNumber = Math.random()*6
console.log(playerNumber);

const pcNumber = Math.random()*6
console.log(pcNumber);

//TODO       CALCOLO
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
let message = '';

if(playerNumber > pcNumber ){
    message += `${playerNumber} è magiore che ${pcNumber}, ha vinto il Giocatore!`
}else if(pcNumber > playerNumber){
    message += `${pcNumber} è magiore che ${playerNumber}, ha vinto il Computer!`
}else{
    message += 'Entrambi sono uguali, non ha vinto nessuno dei due!'
}
console.log(message);
//TODO       OUTPUT
//Stampiamo in pagina i due tiri e il risultato
