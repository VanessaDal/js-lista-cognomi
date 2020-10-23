// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” :nerd_face: della lista in cui il nuovo utente si trova

// creiamo l'array

var arr=["Bianchi","Rossi", "Duzioni", "Balsano", "Verdi"];


// chiediamo il cognome
var cognome=document.getElementById("cognome");

bottone.addEventListener("click", 
function(){

// aggiungi il cognome alla lista
arr.push(cognome.value);

//faccio una copia dell'array prima di ordinare l'originale
var arrCopy=[];

for (i = 0; i < arr.length; i++) {
    arrCopy.push(arr[i]);
  }

// stampa la lista ordinata alfabeticamente
arr.sort();
var a=0;
while (a<arr.length){
document.getElementById("lista-ordinata").insertAdjacentHTML("beforeend","<li>" + arr[a] + "</li>" );
a++};
// stampiamo in che posizione si trova l'utente

document.getElementById("posizione").innerHTML= "Gentile " + cognome.value + ", il tuo cognome si trova alla posizione numero " + (arr.indexOf(cognome.value)+1);

//stampa lista disordinata alfabeticamente

var b=0;
while (b<arrCopy.length){
    document.getElementById("lista-disordinata").insertAdjacentHTML("beforeend","<li>" + arrCopy[b] + "</li>" );
    b++};
});