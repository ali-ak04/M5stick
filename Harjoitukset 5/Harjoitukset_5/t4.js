/* 

Tehtävä 4. Pelin rajoittaminen 

Lisää sivulle toiminnallisuus, jossa peli tulee näkyville vasta sitten kun käyttäjä on vahvistanut olevansa yli 16 vuotias.

*/

function hideGame() {
    document.getElementById('t3').style.display = 'none';
}

function showGame() {
    document.getElementById('t3').style.display = 'block';
}

function testAge() {
    const age = parseInt(document.getElementById('agefield').value, 10);
    if (isNaN(age)) {
        document.getElementById('output2').textContent = 'Anna kelvollinen numero!';
        hideGame();
        return;
    }

    if (age < 16) {
        document.getElementById('output2').textContent = 'Olet liian nuori pelaamaan tätä peliä!';
        hideGame();
    } else {
        document.getElementById('output2').textContent = 'Hyvä, jatketaan!';
        showGame();
    }
}

document.addEventListener('DOMContentLoaded', hideGame);
document.getElementById('go2').addEventListener('click', testAge);



