'use strict';

/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero*/

//definisco una variabile per i km e mostro un prompt all'utente
const numeroChilometri = parseInt(
  prompt('inserire la distanza che si vuole percorre')
);

//definisco una variabile per l'età del passeggero e mostro un prompt all'utente
const etaPasseggero = parseInt(prompt('inserisci la tua età'));

/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)*/

//totale = km (da trasformare in un numero) * prezzo (0.21)
const totale = numeroChilometri * 0.21;

/*va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//Condizioni per lo sconto

//se l'età(da trasformare in un numero) e minore dei 18 anni
//prezzo scontato (del 20%)
const totaleSconto20 = etaPasseggero;

//altrimenti se l'età(da trasformare in un numero) e superiore ai 65 anni
//prezzo scontato (del 40%)
const totaleSconto40 = etaPasseggero;

/*L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca*/
