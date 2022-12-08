window.addEventListener("load", INIT);

function INIT() {
    let focusLastName = document.getElementById("LastName");
    focusLastName.addEventListener("focusout", lastNameVal);
    let focusName = document.getElementById("Name");
    focusName.addEventListener("focusout", nameVal);
    submitButton();
    let focusProduct = document.getElementById("ProductLijst");
    focusProduct.addEventListener("change", productVal);
    let click = document.getElementById("E-mail");
    click.addEventListener("keyup", mailVal)
}

function SUBMIT(event) {
    if (productVal() && lastNameVal() && nameVal() && mailVal()) {
        return true;
    } else {
        event.preventDefault();
    }
}

function submitButton() {
    let button = document.getElementById("Submit");
    button.addEventListener("click", SUBMIT)
}

function lastNameVal() {
    let form = document.getElementById("LastName");
    let span = document.getElementById("LastNameSpan");

    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class");
        return false;
    } else if (form.value.includes(" ")) {
        span.innerHTML = "Geen spaties aub";
        form.removeAttribute("class");
        return false;
    } else {
        console.log(form.value);
        span.innerHTML = "";
        form.setAttribute("class", "validInput");

        return true;
    }
}

function nameVal() {
    let form = document.getElementById("Name");
    let span = document.getElementById("NameSpan");

    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class");
        return false;
    } else if (form.value.includes(" ")) {
        span.innerHTML = "Geen spaties aub";
        form.removeAttribute("class");
        return false;
    } else {
        console.log(form.value);
        span.innerHTML = "";
        form.setAttribute("class", "validInput");
        return true;
    }
}

function mailVal() {
    let regex = new RegExp("([A-z]+[\.]{1}[A-z]+(\.[0-9])?)@((kdg\.be)|(student\.kdg\.be))");
    let form = document.getElementById("E-mail");
    let correct = regex.test(form.value);
    let span = document.getElementById("EmailSpan");

    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class");
        return false;
    } else if (correct) {
        span.innerHTML = "";
        console.log(form.value);
        form.setAttribute("class", "validInput")
        return true;
    } else {
        span.innerHTML = "Email adres is niet van het correcte type";
        form.removeAttribute("class");
        return false;
    }
}

function productVal() {
    let form = document.getElementById("ProductLijst");
    let span = document.getElementById("ProductSpan");

    if (form.value === "") {
        span.innerHTML = "Gelieve een form_results te selecteren";
        return false;
    } else {
        span.innerHTML = "";
        return true;
    }
}