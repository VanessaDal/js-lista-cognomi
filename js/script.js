// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” :nerd_face: della lista in cui il nuovo utente si trova

// creiamo l'array

var arr=["Bianchi","Rossi", "Duzioni", "Balsano", "Verdi"];

// chiediamo il cognome

var cognome = prompt("Qual è il tuo cognome?");

// aggiungi il cognome alla lista
arr.push(cognome)


// stampa la lista ordinata alfabeticamente
arr.sort()
document.getElementById("lista-ordinata").innerHTML="Questa è la lista ordinata alfabeticamente: "+arr;
// stampiamo in che posizione si trova l'utente

document.getElementById("posizione").innerHTML= "Gentile " + cognome + ", il tuo cognome si trova alla posizione numero " + (arr.indexOf(cognome)+1);