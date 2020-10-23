// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” :nerd_face: della lista in cui il nuovo utente si trova

// creiamo l'array

var arr=["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]

// chiediamo il cognome

var cognome = prompt("Qual è il tuo cognome?")

// aggiungi il cognome alla lista
arr.push(cognome)
console.log(arr)

// stampa la lista ordinata alfabeticamente
arr.sort()
console.log(arr)
// stampiamo in che posizione si trova l'utente

console.log (arr.indexOf(cognome)+1)