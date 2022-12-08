let span = document.getElementById("fiche");
let product;
for (let i = 0; i < producten.length; i++){
    if (getNaam(i) === valueProduct){
        product = i;
    }
}

let image = document.createElement("img");
image.src = getImg(product);
image.alt = getNaam(product);

span.appendChild(image);

let name = document.createElement("p");
name.innerHTML = getNaam(product);

span.appendChild(name);

let price = document.createElement("p");
let prijs = "Prijs: &euro; " + getPrijs(product) * valueAantal;
price.innerHTML = prijs.toString();

span.appendChild(price);