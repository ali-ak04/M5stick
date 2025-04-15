/* 

Tehtävä 3. Arvaa mitä numeroa ajattelen

Lisää edelliseen harjoitukset5.html-tiedostoon uusi harjoitus osio (div + h1-otsikko) ja sen alle kolme uutta input-kenttää, jossa pyydetään käyttäjältä
lukualueen alarajaa (id="lowerlimit"), ylärajaa (id"upperlimit") ja arvausta (id="guess"). Lisää myös uusi GO!-nappi (id="go3") sekä p-elementti 
(id="output3"). Lisää sivulle myös input:eihin liittyvät kuvaavat title-kentät (Anna alaraja, Anna yläraja, Arvaa kokonaislukua) 

Tee funktio, joka arpoo kokonaisluvun annetulta väliltä ja tutkii onko se sama, jota käyttäjä on arvannut. Jos arvaus ei mennyt oikein ilmoita sivulla: 
    
    Väärin meni. Ajattelin lukua: ___, ja sinä ajattelit lukua: ___. 
    
Jos arvaus meni oikein, ilmoita: 

    Oikein! Ajattelin myös lukua: ___. Kannattaisiko lotota?

Tarkista myös, että alaraja on pienempi kuin yläraja, ja että arvaus osuu annetulle välille. Tulosta virhetilanteissa seuraavat viestit:

    Tarkista luvut: alaraja ei voi olla suurempi kuin yläraja.
    Tarkista luvut: alaraja ei voi olla sama kuin yläraja.
    Tarkista luvut: arvaus ei ole alueella.

*/

function playGame() {
    const lowerLimit = parseInt(document.getElementById('lowerlimit').value, 10);
    const upperLimit = parseInt(document.getElementById('upperlimit').value, 10);
    const userGuess = parseInt(document.getElementById('guess').value, 10);
    
    if (isNaN(lowerLimit) || isNaN(upperLimit) || isNaN(userGuess)) {
        document.getElementById('output3').textContent = 'Anna kelvolliset numerot kaikille kentille!';
        return;
    }
    
    if (lowerLimit >= upperLimit) {
        document.getElementById('output3').textContent = 
            lowerLimit === upperLimit 
            ? 'Tarkista luvut: alaraja ei voi olla sama kuin yläraja.' 
            : 'Tarkista luvut: alaraja ei voi olla suurempi kuin yläraja.';
        return;
    }
    
    if (userGuess < lowerLimit || userGuess > upperLimit) {
        document.getElementById('output3').textContent = 'Tarkista luvut: arvaus ei ole alueella.';
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    
    if (userGuess === randomNumber) {
        document.getElementById('output3').textContent = 
            `Oikein! Ajattelin myös lukua: ${randomNumber}. Kannattaisiko lotota?`;
    } else {
        document.getElementById('output3').textContent = 
            `Väärin meni. Ajattelin lukua: ${randomNumber}, ja sinä ajattelit lukua: ${userGuess}.`;
    }
}
document.getElementById('go3').addEventListener('click', playGame);



