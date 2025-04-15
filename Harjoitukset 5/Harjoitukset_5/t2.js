/* 

Tehtävä 2: Iän tarkistus

Lisää edelliseen harjoitukset5.html-tiedostoon uusi harjoitusosio (div + h1-otsikko) ja sen alle uusi input-kenttä, jossa kysytään käyttäjän 
ikää. Lisää myös uusi GO!-nappi (id="go2") sekä p-elementti (id="output2"). Tee funktio, joka tutkii onko annettu ikä alle 16, ja jos näin on 
lisää sivulle tekstin: 
    
    Olet liian nuori pelaamaan tätä peliä!

Jos ikä on suurempi kuin 16 sivulle pitäisi ilmestyä teksti:

    Hyvä, jatketaan!

*/

function testAge() {
    const age = parseInt(document.getElementById('agefield').value, 10);
    if (isNaN(age)) {
        document.getElementById('output2').textContent = 'Anna kelvollinen numero!';
        return;
    }

    const message = age < 16 
        ? 'Olet liian nuori pelaamaan tätä peliä!' 
        : 'Hyvä, jatketaan!';
    document.getElementById('output2').textContent = message;
}
document.getElementById('go2').addEventListener('click', testAge);



