'use strict';

//km inseriti dall'utente
const kmRichiesti = Number(prompt('Inserisci i km che vuoi percorrere'));

//eta inserita dall'utente
const etaPasseggero = Number(prompt('Inserisci la tua età'));

// creo una variabile per il prezzo del biglietto per km
const prezzoKm = 0.21;

/* creo due variabili per gli sconti del 20% e del 40% per il costro del biglietto */

//creo una variabile per lo sconto minorenni del 20%
const percentualeScontoMinorenni = 20;

//creo una variabile per lo sconto over 65 del 40%
const percentualeScontoOver65 = 40;
