window.addEventListener("load", INIT);

function INIT() {
    lastNameFocus();
    nameFocus();
    mailfocus();
    submitButton();
    productFocus();
}

function SUBMIT() {
    productVal();
    lastNameVal()
    nameVal();
    mailVal();

    if (productVal()){
        if (lastNameVal()){
            if (nameVal()){
                if (mailVal()){
                    return true;
                }
            }
        }
    }
    return false;
}

function submitButton() {
    let button = document.getElementById("Submit");
    button.addEventListener("click", SUBMIT);
}

function lastNameFocus() {
    let focus = document.getElementById("LastName");
    focus.addEventListener("focusout", lastNameVal);
}

function lastNameVal() {
    let form = document.getElementById("LastName");
    let span = document.getElementById("LastNameSpan");

    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class", "validInput");
        return false;
    } else if (form.value.includes(" ")) {
        span.innerHTML = "Geen spaties aub";
        form.removeAttribute("class", "validInput");
        return false;
    } else {
        console.log(form.value);
        span.innerHTML = "";
        form.setAttribute("class", "validInput");
        return true;
    }
}


function nameFocus() {
    let focus = document.getElementById("Name");
    focus.addEventListener("focusout", nameVal);
}

function nameVal() {
    let form = document.getElementById("Name");
    let span = document.getElementById("NameSpan");

    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class", "validInput");
        return false;
    } else if (form.value.includes(" ")) {
        span.innerHTML = "Geen spaties aub";
        form.removeAttribute("class", "validInput");
        return false;
    } else {
        console.log(form.value);
        span.innerHTML = "";
        form.setAttribute("class", "validInput");
        return true;
    }
}

function mailfocus() {
    let focus = document.getElementById("E-mail");
    focus.addEventListener("focusin", mailClick)
}

function mailClick() {
    let click = document.getElementById("E-mail");
    click.addEventListener("keyup", mailVal)
}

function mailVal() {
    let regex = new RegExp("([A-z]+\.[A-z]+(\.[0-9])?)@((kdg\.be)|(student\.kdg\.be))");
    let form = document.getElementById("E-mail");
    let correct = regex.test(form.value);
    let span = document.getElementById("EmailSpan");


    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class", "validInput");
        return false;
    } else if (correct) {
        span.innerHTML = "";
        console.log(form.value);
        form.setAttribute("class", "validInput")
        return true;
    } else {
        span.innerHTML = "Email adres is niet van het correcte type";
        form.removeAttribute("class", "validInput");
        return false;
    }
}

function productFocus(){
    let focus = document.getElementById("ProductLijst");
    focus.addEventListener("change", productVal);
}

function productVal() {
    let form = document.getElementById("ProductLijst");
    let span = document.getElementById("ProductSpan");

    if (form.value === "") {
        span.innerHTML = "Gelieve een product te selecteren";
        return false;
    } else {
        span.innerHTML = "";
        return true;
    }
}