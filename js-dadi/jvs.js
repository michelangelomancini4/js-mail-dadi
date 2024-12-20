// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

let numeroUser = Math.floor(Math.random() *6)+ 1;
let numerPc= Math.floor(Math.random() *6)+ 1;

console.log(numeroUser, numerPc);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(numeroUser === numerPc ){

    console.log("Risultato: PAREGGIO!");
}
else if(numeroUser > numerPc ){

    console.log("il Vincitore è l'user col punteggio di : " , numeroUser);
}

else 
    console.log("Il Vincitore è il PC!! col punteggio di : " , numerPc);