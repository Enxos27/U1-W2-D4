/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* RISPOSTA */
const area = function (l1, l2) {
  let ris1 = l1 * l2;
  return ris1;
};

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* RISPOSTA */
const crazySum = function (n1, n2) {
  let ris2;
  if (n1 === n2) {
    ris2 = (n1 + n2) * 3;
    return ris2;
  } else {
    ris2 = n1 + n2;
    return ris2;
  }
};

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* RISPOSTA */
const crazyDiff = function (n3) {
  let ris3 = Math.abs(n3 - 19);
  if (ris3 > 19) {
    ris3 = ris3 * 3;
    return ris3;
  } else {
    return ris3;
  }
};

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* RISPOSTA */
const boundary = function (n4) {
  if (n4 > 20 && n4 <= 100) {
    return true;
  } else if (n4 === 400) {
    return true;
  } else {
    return false;
  }
};

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* RISPOSTA */
const epify = function (str1) {
  const firstSentence = "EPICODE";
  if (str1.startsWith("EPICODE")) {
    return str1;
  } else {
    return firstSentence + str1;
  }
};

console.log(epify("EPICODE è bellissimo"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* RISPOSTA */
const check3and7 = function (n6) {
  if (n6 % 3 === 0 || n6 % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* RISPOSTA */
const reverseString = function (str2) {
  let reverseString = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    reverseString += str2[i];
  }
  return reverseString;
};
console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* RISPOSTA */ //SBAGLIATO!!!!!!

const upperFirst = function (str3) {
  let asSpace = str3.split(" ");
  let prova = [];
  for (let i = 0; i < asSpace.length; i++) {
    let parola = asSpace[i];

    let parola2 = parola.charAt(0).toUpperCase() + parola.slice(1);
    prova.push(parola2);
  }
  console.log("Test n8", prova);
  return prova.join(" ");
};

console.log(upperFirst("sono vincenzo questo è un test"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* RISPOSTA */
const cutString = function (str4) {
  return str4.slice(1, str4.length - 1);
};

console.log(cutString("Marianna"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* RISPOSTA */
const giveMeRandom = function (n10) {
  let array = [];
  for (let i = 0; i < n10; i++) {
    let nRandom = Math.ceil(Math.random() * 10);
    array.push(nRandom);
  }
  return array;
};
console.log(giveMeRandom(5));
