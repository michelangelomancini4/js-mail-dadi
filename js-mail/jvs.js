// Mail
// Crea una lista di email di invitati ad una festa. 
// Chiedi all’utente la sua email,
//  controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email


// Crea una lista di email di invitati ad una festa. 

let listaMail = ["giovanni@tiscali.it","andrea@tiscali.it", "luca@tiscali.it", "sebastiano@tiscali.it", "paolo@tiscali.it", "dario@tiscali.it",  ]
console.log(listaMail);

//   Creazione ciclo for

for (let i = 0 ; i < listaMail.length ; i++) {

    let ifUserPresent = listaMail [i];

// Chiedi all’utente la sua email

    let mailUtente = prompt ("Inserisci la tua mail per vedere se sei nella lista");

//  controlla che sia nella lista di chi può accedere

    if (mailUtente === ifUserPresent)

//  stampa un messaggio appropriato sull’esito del controllo.

    console.log(mailUtente, "è presente nella lista");

    else 
    console.log("Ci dispiace ma non sei sulla lista!");
   
}
