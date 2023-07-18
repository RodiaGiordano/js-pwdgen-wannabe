const userName = prompt('inserisci il tuo nome');

const userSurname = prompt('inserisci il tuo cognome');

const color = prompt('inserisci il tuo colore preferito');

const password = (userName + userSurname + color) +'21';

document.getElementById('password').innerHTML = password













console.log (password);