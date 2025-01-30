// 🔵 1. Creare și filtrare de elemente în DOM
// 📌 Exercițiu:
// Creează o listă de produse (ex.: telefoane, laptopuri).
// Creează un câmp de căutare unde utilizatorul poate introduce un text.
// Pe măsură ce utilizatorul tastează, 
// lista de produse trebuie să se filtreze în 
// funcție de textul introdus.


let produse = ["iPhone", "Samsung", "Huawei", "Asus", "Lenovo", "Dell", "MacBook", "HP"];
let lista = document.getElementById("productList");
let input = document.getElementById("search");

// Funcție pentru afișarea produselor
function afiseazaProduse(listaProduse) {
    lista.innerHTML = ""; // Șterge lista existentă
    listaProduse.forEach(prod => {
        let li = document.createElement("li");
        li.textContent = prod;
        lista.appendChild(li);
    });
}

// Inițial, afișăm toate produsele
afiseazaProduse(produse);

// Filtrarea produselor pe măsură ce utilizatorul tastează
input.addEventListener("input", function() {
    let text = input.value.toLowerCase();
    let produseFiltrate = produse.filter(p => p.toLowerCase().includes(text));
    afiseazaProduse(produseFiltrate);
});
