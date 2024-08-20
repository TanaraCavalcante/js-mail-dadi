/*------------------------
ESERCIZIO 2 - Finta Login
--------------------------
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente? */

//TODO       FASE PREPARATORIA
//Ricupero gli ellementi della pagina di mio interesse
const emailField = document.getElementById('input-email');
const btn = document.getElementById('accedi-btn');
const resultElement = document.getElementById('result')


//TODO       FASE DE ELABORAZIONE
//inventa una lista di email autorizzate
const allowedEmails = ['tanara@gmail.com','luca@gmail.com','tamyres@gmail.com'];

//TODO       EVENTO
Form.addEventListener('submit', function(e) {
    e.preventDefault();

//Raccolta dati
const email = emailField.value.trim();

//! Validation
if(!email) return;
// Una mail valida

//TODO       FASE DE ELABORAZIONE
//Prepara un flag
let isAlloewd = false;

//Controllo se la mail è tra quelle autorizzate
for (let i = 0; i < allowedEmails.length; i++){
    const emailToCheck = allowedEmails[i];

    if(email === emailToCheck){
        isAllowed = true;
    }
}

//TODO       OUTPUT
//calcolo qual è il messagio giusto.
const message = isAllowed ? 'Benvenuto' : 'Accesso negato'

//stampa un messaggio appropriato sull’esito del controllo.
resultElement.innerText = message;
})







