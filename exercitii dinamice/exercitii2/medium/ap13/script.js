const inputMin = document.getElementById("pretMin");
const inputMax = document.getElementById("pretMax");
const produse = document.querySelectorAll("#lista li");

function FiltreazaPret() {
    let pretMin = parseFloat(inputMin.value) || 0; // Dacă inputul este gol, setăm 0 ca valoare implicită
    let pretMax = parseFloat(inputMax.value) || Infinity; // Dacă inputul este gol, setăm Infinit ca valoare maximă

    produse.forEach(produs => {
        let pretProdus = parseFloat(produs.getAttribute("data-pret"));

        // Verificăm dacă prețul produsului este în interval
        if (pretProdus >= pretMin && pretProdus <= pretMax) {
            produs.style.display = ""; // Afișează produsul
        } else {
            produs.style.display = "none"; // Ascunde produsul
        }
    });
}

// Adăugăm evenimente pentru ambele input-uri
inputMin.addEventListener("input", FiltreazaPret);
inputMax.addEventListener("input", FiltreazaPret);
