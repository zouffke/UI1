window.addEventListener("load", INIT);

function INIT() {
    product();
    naam();
    voorNaam();
    mail();
    telefoon();
    straat();
    nummer();
    postcode();
    kleur();
    aantal();
    materiaal();
    opmerking();
}

const query = window.location.search;
const searchParams = new URLSearchParams(query);

function product() {
    let value = searchParams.get("product");
    let span = document.getElementById("ProductBevestiging");

    span.innerHTML = "Uw product:<br>" + "&emsp;" + value;
}

function naam() {
    let value = searchParams.get("lastname");
    let span = document.getElementById("NaamBevestiging");
    span.innerHTML = "Naam:<br>" + "&emsp;" + value;
}

function voorNaam() {
    let value = searchParams.get("name");
    let span = document.getElementById("VoornaamBevestiging");
    span.innerHTML = "Voornaam:<br>" + "&emsp;" + value;
}

function mail() {
    let value = searchParams.get("email");
    let span = document.getElementById("EmailBevestiging");
    span.innerHTML = "Mail:<br>" + "&emsp;" + value;
}

function telefoon() {
    let value = searchParams.get("telefoon");
    let span = document.getElementById("TelefoonBevestiging");

    if (value === "+32 0" || value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Telefoon nummer:<br>" + "&emsp;" + value;
    }
}

function straat() {
    let value = searchParams.get("straat");
    let span = document.getElementById("StraatBevestiging");
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Straat:<br>" + "&emsp;" + value;
    }
}

function nummer() {
    let value = searchParams.get("nummer");
    let span = document.getElementById("NummerBevestiging");
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Huisnummer:<br>" + "&emsp;" + "&emsp;" + value;
    }
}

function postcode(){
    let value = searchParams.get("postcode");
    let span = document.getElementById("PostcodeBevestiging");
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Postcode:<br>" + "&emsp;" + value;
    }
}

function kleur(){
    let value = searchParams.get("color");
    let span = document.getElementById("KleurBevestiging");
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Kleur:<br>" + "&emsp;" + value;
    }
}

function aantal(){
    let value = searchParams.get("aantal");
    let span = document.getElementById("AantalBevestiging");
    if (value < 1) {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Aantal<br>" + "&emsp;" + value;
    }
}

function materiaal(){
    let value = searchParams.get("materiaal");
    let span = document.getElementById("MateriaalBevestiging");
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Materiaal:<br>" + "&emsp;" + value;
    }
}

function opmerking(){
    let value = searchParams.get("opmerking");
    let span = document.getElementById("OpmerkingBevestiging");
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Uw opmerking:<br>" + "&emsp;" + value;
    }
}