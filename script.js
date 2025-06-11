const productCatalog = [
  {
    id: 1,
    name: "Illustrazione Gatto",
    price: 30,
    quantity: 10,
    imageUrl: "Assets/Screenshot_1.jpg",
  },
  {
    id: 2,
    name: "Illustrazione Cane",
    price: 25,
    quantity: 5,
    imageUrl: "./product-catalog/Assets/Screenshot-2.jpg",
  },
  {
    id: 3,
    name: "illustrazione Volpe",
    price: 35,
    quantity: 7,
    imageUrl: "./product-catalog/Assets/Screenshot-3.jpg",
  },
];

let carrello = [];

const contenitoreProdotti = document.getElementById("prodotti");
const contenitoreCarrello = document.getElementById("carrello");

function mostraProdotti() {
  productCatalog.forEach((prodotto) => {
    const card = document.createElement("div");
    card.style.display = "flex";
    card.style.border = "2px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";
    card.style.backgroundColor = "fdf2e4";
    card.style.alignItems = "center";
    card.style.gap = "20px";

    card.innerHTML = `
  <img src="${prodotto.imageUrl || "Assets/Screenshot_1.jpg"}" 
       alt="${prodotto.name}" width="120" style="border-radius: 4px;" />
  <div style="flex: 1;">
    <h3>${prodotto.name}</h3>
    <p>Prezzo: €${prodotto.price}</p>
    <button>Aggiungi al carrello</button>
  </div>
`;

    card
      .querySelector("button")
      .addEventListener("click", () => aggiungiAlCarrello(prodotto));

    contenitoreProdotti.appendChild(card);
  });
}

function aggiungiAlCarrello(prodotto) {
  carrello.push(prodotto);
  aggiornaCarrello();
}

function aggiornaCarrello() {
  contenitoreCarrello.innerHTML = "";
  carrello.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - €${item.price}`;
    contenitoreCarrello.appendChild(li);
    li.style.listStyleType = "none"
  });
}

mostraProdotti();
