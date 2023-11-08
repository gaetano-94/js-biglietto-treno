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

if (!isNaN(kmRichiesti) && !isNaN(etaPasseggero)) {
  //calcolo del biglietto iniziale senza lo sconto
  let prezzoBiglietto = prezzoKm * kmRichiesti;
  //sconto iniziale
  let scontoBiglietto = 0;

  if (etaPasseggero < 18) {
    //calcolo sconto under 18
    scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoMinorenni;
  } else if (etaPasseggero >= 65) {
    //calcolo sconto over 65
    scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
  }

  //calcolo prezzo biglietto comprensivo di sconto

  prezzoBiglietto -= scontoBiglietto;
  console.log('Il prezzo del biglietto è', prezzoBiglietto.toFixed(2));
} else {
  //dati errati
  console.log('Errore, dati non inseriti correttamente.Riprovare');
}
