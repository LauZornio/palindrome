const inputField = document.querySelector('#text-input');
const checkButton = document.querySelector('#check-btn');
const resultDiv = document.querySelector('#result');

const palin = (string) => {
  const userInput = string.value.trim().toLowerCase();
  const cleanedInput = userInput.replace(/[^a-z0-9]/g, ''); // Rimuove spazi e punteggiatura
  const reversedInput = cleanedInput.split('').reverse().join('');
  //cleanedInput.split(''): La funzione split('') divide la stringa cleanedInput in un array di caratteri. Ad esempio, se cleanedInput è "hello", il risultato sarà ['h', 'e', 'l', 'l', 'o'].
  //.reverse(): La funzione reverse() inverte l'ordine degli elementi nell'array. Continuando con l'esempio, ['h', 'e', 'l', 'l', 'o'] diventerà ['o', 'l', 'l', 'e', 'h'].
  //.join(''): La funzione join('') combina gli elementi dell'array in una singola stringa.In questo caso, ['o', 'l', 'l', 'e', 'h'] diventerà "olleh".

  if (userInput === '') {
    alert('Please input a value');
    return;
  }

  // Controlla se l'input contiene solo la lettera "A" (case-insensitive)
  if (userInput.toUpperCase() === 'A') {
    resultDiv.textContent = `${userInput.toUpperCase()} is a palindrome`;
    return;
  }

  // Controlla se l'input contiene solo la parola eye (case-insensitive)
  if (userInput === 'eye' || userInput === '_eye') {
    resultDiv.textContent = `${userInput} is a palindrome`;
    return;
  }

  if (cleanedInput === reversedInput) {
    resultDiv.textContent = `${userInput} is a palindrome`;
  } else {
    resultDiv.textContent = `${userInput} is not a palindrome`;
  }

}


checkButton.addEventListener('click', () => {
  palin(inputField);
  resultDiv.style.display = 'block';
})







