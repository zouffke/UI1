window.addEventListener("load", INIT);

function INIT() {

    let span;
    let product;
    let valueProduct;
    let section;
    let title;

    let main = document.getElementById("main");

    section = document.createElement("section");
    section.className = "ficheGrid";
    main.appendChild(section);

    title = document.createElement("h2");
    title.className = "hideTitle";
    title.innerHTML = "product fiche";
    section.appendChild(title);

    span = document.createElement("span");
    span.id = "fiche";
    section.appendChild(span);

    const searchParams = new URLSearchParams(query);
    valueProduct = searchParams.get("product");
    for (let i = 0; i < producten.length; i++) {
        if (getNaam(i) === valueProduct) {
            product = i;
        }
    }
    let link = document.createElement("a")
    link.href = getLink(product);
    link.target = "_blank";
    link.rel = "noreferrer noopener";

    let image = document.createElement("img");
    image.src = getImg(product);
    image.alt = getNaam(product);

    span.appendChild(link);
    link.appendChild(image);

    let name = document.createElement("p");
    name.innerHTML = getNaam(product);

    link.appendChild(name);

    let price = document.createElement("p");
    let prijs = "Prijs: &euro; " + getPrijs(product) * valueAantal;
    price.innerHTML = prijs.toString();

    span.appendChild(price);
}

