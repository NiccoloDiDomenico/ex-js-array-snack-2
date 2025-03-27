// EX - Snack Array Avanzati
// Import 
import books from './data.js';

// Snack 1 
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter((b) => b.pages > 300)
// console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((b) => b.title)
// console.log(longBooksTitles);

// Stampa in console ogni titolo nella console.
// books.forEach((b) => console.log(b.title))


// Snack 2
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter((b) => b.available)
// console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map((b) => {
    // Rimuove il simbolo € e converte il prezzo in numero
    let originalPrice = parseFloat(b.price.replace('€', ''));
    // Calcola il prezzo scontato e arrotondalo al centesimo
    let discountPrice = (originalPrice * 0.8).toFixed(2);
    // Restituisce il nuovo oggetto
    return { ...b, price: `${discountPrice}€` };
});

// console.log(discountedBooks);

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((b) => {
    // Rimuove il simbolo € e converte il prezzo in numero
    const originalPrice = parseFloat(b.price.replace('€', ''));
    // Verifica se è un num. intero
    return Number.isInteger(originalPrice) // number % 1 === 0
})
// console.log(fullPricedBook);


// Snack 3
// Creare un array (authors) che contiene gli autori dei libri.
const authors = books.map((b) => b.author)
// console.log(authors);

// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAdults = books.every((b) => b.author.age > 18)
// console.log(areAuthorsAdults);

// Ordina l’array authors in base all’età, senza creare un nuovo array. (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
if (areAuthorsAdults) {
    authors.sort((a, b) => a.age - b.age)
} else {
    authors.sort((a, b) => b.age - a.age)
}
// authors.sort((a, b) => (a.age - b.age) * (areAuthorsAdults ? 1 : -1))
// console.log(authors);


// Snack 4
// Creare un array (ages) che contiene le età degli autori dei libri.
const ages = books.map((b) => b.author.age)
// console.log(ages);

// Calcola la somma delle età (agesSum) usando reduce.
const agesSum = ages.reduce((acc, numero) => {
    return acc + numero
}, 0)
// console.log(agesSum);

// Stampa in console l’età media degli autori dei libri.
const media = agesSum / ages.length
// console.log(media);


// Snack 5 (Bonus)
// Usando la l'API <https://boolean-spec-frontend.vercel.app/freetestapi/books/{id}> usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
async function getBooks(ids) {
    const promises = ids.map(async (id) => {
        try {
            const response = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`)
            const obj = await response.json()
            return obj
        } catch (error) {
            console.error(`Errore durante il fetch per l'ID: ${id}, ${error} `)
        }
    })
    const books = await Promise.all(promises)
    return books
}

// Testala con l’array [2, 13, 7, 21, 19].
getBooks([2, 13, 7, 21, 19])
// .then((result) => console.log(result))
// .catch((error) => console.error(error))


// Snack 6 (Bonus)
// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
const areThereAvailableBooks = books.some((b) => b.available)
// console.log(areThereAvailableBooks);

// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
const booksByPrice = [...books].sort((a, b) => {
    // Rimuove il simbolo € e converti i prezzi in numeri
    const priceA = parseFloat(a.price.replace('€', ''));
    const priceB = parseFloat(b.price.replace('€', ''));

    return priceA - priceB;
})
// console.log(booksByPrice);

// Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.
booksByPrice.sort((a, b) => {
    return b.available - a.available;
})
// console.log(booksByPrice);


// Snack 7 (Bonus)
// Usa reduce per creare un oggetto (tagCounts) che conta quante volte ogni tag viene usato tra i libri.
const tagCounts = books.reduce((acc, b) => {
    b.tags.forEach((t) => {
        // Se il tag non esiste, inizializzalo a 1
        if (!acc[t]) {
            acc[t] = 1;
        } else {
            // Altrimenti, incrementa il suo valore
            acc[t]++;
        }
    });
    return acc
}, {});
// console.log(tagCounts);







