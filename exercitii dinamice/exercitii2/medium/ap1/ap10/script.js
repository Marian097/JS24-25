const input = document.getElementById("text");
const listaOrase = document.querySelectorAll("#list li");


function filter() {
    let text = input.value.toLowerCase()
    
    listaOrase.forEach(town => {
        let item = town.getAttribute("data-name").toLowerCase();
        let matchTown = item.includes(text);

        town.style.display = matchTown ? "" : "none";
    });

};



input.addEventListener("input", filter);
