const productCatalog = [
  {
    id: 1,
    name: "Illustrazione Gatto",
    price: 30,
    quantity: 10,
    imageUrl: "Assets/abc.jpg",
  },
  {
    id: 2,
    name: "Illustrazione Cane",
    price: 25,
    quantity: 5,
    imageUrl: "Assets/abc2.jpg",
  },
  {
    id: 3,
    name: "illustrazione Volpe",
    price: 35,
    quantity: 7,
    imageUrl: "Assets/abc3.jpg",
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
  <img src="${prodotto.imageUrl}" 
       alt="${prodotto.name}" 
       width="120"
       style="border-radius: 4px;" />

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
  carrello.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - €${item.price}`;
    li.style.listStyleType = "none";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "5px 0";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Rimuovi";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.padding = "3px 8px";
    removeBtn.style.backgroundColor = "#ff4444";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.borderRadius = "3px";
    removeBtn.style.cursor = "pointer";

    
    removeBtn.addEventListener("click", () => rimuoviDalCarrello(index));

    li.appendChild(removeBtn);
    contenitoreCarrello.appendChild(li);
  });
}

function rimuoviDalCarrello(index) {
  carrello.splice(index, 1);
  aggiornaCarrello();
}


mostraProdotti();
