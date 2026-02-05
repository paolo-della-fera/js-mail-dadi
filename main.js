// MAIL

// inizio creandomi una lista di email delle persone invitate alla festa 
const emails = [
    "luca.rossi@email.com",
    "maria.bianchi@testmail.net",
    "giovanni.verdi@mailbox.org",
    "anna.neri@fakepost.it",
    "paolo.gialli@demoemail.com"
]

// creo il prompt per far inserire l'email all'utente
let email = (prompt('inserisci la tua email'))

// mi creo una variabile dove salvare l'email se la troviamo nella lista
let emailFound = false

// creo il ciclo for per controllare se l'email inserita è all'interno dell'elenco degli invitati 
for (let i = 0; i < emails.length; i++) {

    // SE l'email è all'interno della lista viene salvato all'interno della variabile emailFound
    if (email === emails[i]) {
        emailFound = true;
    }
}

// SE l'email inserita è presente nell'elenco viene consentito l'accesso 
if (emailFound) {
    console.log('Accesso consentito ✅');
}

// ALTRIMENTI se l'email insertita non è presente viene negato l'accesso
else {
    console.log('Accesso negato ❌');
}



// GIOCO DEI DADI

// inizio creando un array con tutte le facce del dado
let dice = [1, 2, 3, 4, 5, 6];

// numero casuale del giocatore 
let player = dice[parseInt(Math.random() * dice.length)];

// numero casuale del computer 
let computer = dice[parseInt(Math.random() * dice.length)];

// stampo i numeri scelti dal pc e dal giocatore in console
console.log("Giocatore: " + player);
console.log("Computer: " + computer);

// confronto i risultati e determino chi ha vinto
// SE il giocatore ha ottenuto un numero maggiore del computer ha vinto
if (player > computer) {
    console.log('Hai Vinto! 🎉');
}

// ALTRIMENTI SE il computer ha ottenuto un numero maggiore del giocatore ha vinto
else if (player < computer) {
    console.log('Ha Vinto il Computer 💻');
}

// ALTRIMENTI se il numero è uguale la partita finisce in pareggio
else {
    console.log('Pareggio! 😁');
}