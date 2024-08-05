# 🔍 Palindrome Checker

Benvenuto nel progetto **Palindrome Checker**! Questo progetto ti permette di verificare se una parola o una frase è un palindromo, ovvero se si legge allo stesso modo da sinistra a destra e da destra a sinistra, ignorando punteggiatura, maiuscole e spazi.

Questo è il settimo esercizio del corso di freecodecamp.org (https://www.freecodecamp.org/), nello specifico (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-palindrome-checker-project/build-a-palindrome-checker)

Lezione: Build a Palindrome Checker Project

## 📋 Descrizione

Il **Palindrome Checker** è una semplice applicazione web che prende in input una stringa e verifica se è un palindromo. Utilizza HTML, CSS e JavaScript per fornire una interfaccia utente intuitiva e funzionale.

## 🚀 Funzionalità

- **Verifica Palindromi:** Inserisci una parola o una frase e clicca su "Check" per vedere se è un palindromo.
- **Supporto per Maiuscole e Minuscole:** Ignora la differenza tra maiuscole e minuscole.
- **Rimozione di Punteggiatura e Spazi:** Pulisce l'input da caratteri non alfanumerici.

## 🎓 Apprendimento JS

E' stato un esercizio di ripasso di tutte le nozioni apprese negli esercizi precedenti.

**.split()** è una funzione utilizzata per dividere una stringa in un array di sottostringhe, in base a un separatore specificato. la sintassi è string.split(separator, limit), dove il separatore è la stringa che determina i punti in cui la stringa verrà divisa. limit è un numero intero che delimita il numero di suddivisioni

let stringa = "Ciao come stai";
let parole = stringa.split(" ");
console.log(parole); // ["Ciao", "come", "stai"]

let stringa = "Ciao";
let caratteri = stringa.split("");
console.log(caratteri); // ["C", "i", "a", "o"]

let stringa = "Ciao1come2stai";
let parti = stringa.split(/[0-9]/);
console.log(parti); // ["Ciao", "come", "stai"]

## Licenza
Questo progetto è distribuito sotto la licenza MIT. Vedi il file LICENSE per maggiori dettagli.
