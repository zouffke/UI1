window.addEventListener("load", lastNameFocus);

function lastNameFocus(event) {
    let focus = document.getElementById("LastName");
    focus.addEventListener("focusout", lastNameVal)
}

function lastNameVal(event) {
    let form = document.getElementById("LastName").value;

    if (form.includes(" ")) {
        console.log("Foute input")
    } else {
        console.log(form);
    }
}