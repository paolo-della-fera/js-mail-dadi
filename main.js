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