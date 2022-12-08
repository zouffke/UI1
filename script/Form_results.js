window.addEventListener("load", INIT);

const query = window.location.search;
const searchParams = new URLSearchParams(query);

let valueProduct = searchParams.get("product");
let valueLastName = searchParams.get("lastname");
let valueName = searchParams.get("name");
let valueMail = searchParams.get("email");
let valueTel = searchParams.get("telefoon");
let valueStraat = searchParams.get("straat");
let valueNummer = searchParams.get("nummer");
let valueCode = searchParams.get("postcode");
let valueColor = searchParams.get("color");
let valueAantal = searchParams.get("aantal");
let valueMat = searchParams.get("materiaal");
let valueText = searchParams.get("opmerking");



function INIT() {
    let spanProduct = document.getElementById("ProductBevestiging");
    let spanLastName = document.getElementById("NaamBevestiging");
    let spanName = document.getElementById("VoornaamBevestiging");
    let spanMail = document.getElementById("EmailBevestiging");
    let spanTel = document.getElementById("TelefoonBevestiging");
    let spanStraat = document.getElementById("StraatBevestiging");
    let spanNummer = document.getElementById("NummerBevestiging");
    let spanCode = document.getElementById("PostcodeBevestiging");
    let spanColor = document.getElementById("KleurBevestiging");
    let spanAantal = document.getElementById("AantalBevestiging");
    let spanMat = document.getElementById("MateriaalBevestiging");
    let spanText = document.getElementById("OpmerkingBevestiging");

    spanProduct.innerHTML = "Uw product:<br>" + "&emsp;" + valueProduct;
    spanLastName.innerHTML = "Naam:<br>" + "&emsp;" + valueLastName;
    spanName.innerHTML = "Voornaam:<br>" + "&emsp;" + valueName;
    spanMail.innerHTML = "Mail:<br>" + "&emsp;" + valueMail;

    if (valueTel === "+32 0" || valueTel === "") {
        spanTel.innerHTML = "";
    } else {
        spanTel.innerHTML = "Telefoon nummer:<br>" + "&emsp;" + value;
    }

    print("Straat", valueStraat, spanStraat);
    print("Huisnummer", valueNummer, spanNummer);
    print("Postcode", valueCode, spanCode);
    print("Kleur", valueColor, spanColor);
    print("Aantal", valueAantal, spanAantal);
    print("Materiaal", valueMat, spanMat);
    print("Uw omperking", valueText, spanText);
}

function print(naam, value, span){
    if (value === "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = naam + ":<br>" + "&emsp;" + value;
    }
}