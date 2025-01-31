const addButton = document.getElementById("adauga");
const delButton = document.getElementById("sterge");
const div = document.getElementById("container");

addButton.addEventListener("click", function () {
    let p = document.createElement("p");
    p.textContent = "Acesta este un paragraf";
    div.appendChild(p);
});

delButton.addEventListener("click", function() {
    if (div.lastChild) {
        div.removeChild(div.lastChild); // Șterge ultimul paragraf adăugat
    } else {
        alert("Nu există paragrafe de șters!"); // Evită eroarea dacă nu sunt elemente
    }
});
