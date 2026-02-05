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

//ALTRIMENTI se l'email insertita non è presente viene negato l'accesso
else {
    console.log('Accesso negato ❌');
}