/* Chiedi all'utente il cognome, inseriscilo in un array con altri cognomi
e stampa la lista ordinata alfabeticamente.
Scrivi a che posizione della lista il nuovo utente si trova*/

// inizializzo arraycognomi
var listaCognomi;
listaCognomi = [
  "gerace",
  "rossi",
  "morabito",
  "alessi",
  "cantafora"
];
console.log( listaCognomi );


// chiedo all'utente di inserire il suo cognome
var elementoUtente = prompt ( "inserisci il tuo cognome" );
listaCognomi.push( elementoUtente );

// ordino l'array
listaCognomi.sort();

var elemento = document.getElementById( 'lista-cognomi' );
var temp;
for( i = 0; i < listaCognomi.length; i++ )
{
  temp = elemento.innerHTML;
  console.log(temp);
  elemento.innerHTML = temp + "<li>" + listaCognomi[i] + "</li>";
}

// stampo la posizione dell'elemento inserito dall'utente
var posizione = listaCognomi.indexOf( elementoUtente );
console.log(posizione);
document.getElementById( 'posizione' ).innerHTML = posizione;
