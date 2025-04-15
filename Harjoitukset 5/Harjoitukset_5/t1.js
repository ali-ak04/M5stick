/* 

Tehtävä 1: Tervehtiminen input:in avulla

Tee funktio (sayHello), joka lisää t1.html - sivulle tervehdyksen, joka käyttää input-kentässä annettua nimeä. 

Funktiota kutsutaan, kun GO!-nappia painetaan. Esimerkkitulostus sivulle (kohtaan ---todo---): 

    Hei, ___, oletko valmis aloittamaan?

Avaa tiedosto harjoitukset5.html selaimessa (tässä tehtävässä ei tarvitse muokata html-tiedostoa)

*/

function sayHello() {
    const name = document.getElementById('namefield').value;
    const message = name ? `Hei, ${name}, oletko valmis aloittamaan?` : 'Hei, vieras, oletko valmis aloittamaan?';
    document.getElementById('output1').textContent = message;
}
document.getElementById('go1').addEventListener('click', sayHello);



