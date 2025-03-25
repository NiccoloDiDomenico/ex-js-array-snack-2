// EX - Snack Array Avanzati
// Import 
import books from './data.js';

// Snack 1 
// Crea una funzione che somma due numeri.
function somma(a, b) {
    return a + b
}

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter((b) => b.pages > 300)
// console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((b) => b.title)
// console.log(longBooksTitles);

// Stampa in console ogni titolo nella console.
// consegna poco chiara


// Snack 2
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter((b) => b.available)
console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map((b) => {
    // Rimuove il simbolo € e converte il prezzo in numero
    let originalPrice = parseFloat(b.price.replace('€', ''));
    // Calcola il prezzo scontato e arrotondalo al centesimo
    let discountPrice = (originalPrice * 0.8).toFixed(2);
    // Restituisce il nuovo oggetto
    return { ...b, price: `${discountPrice}€` };
});

console.log(discountedBooks);

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((b) => {
    // Rimuove il simbolo € e converte il prezzo in numero
    const originalPrice = parseFloat(b.price.replace('€', ''));
    // Verifica se è un num. intero
    return Number.isInteger(originalPrice)
})
console.log(fullPricedBook);
