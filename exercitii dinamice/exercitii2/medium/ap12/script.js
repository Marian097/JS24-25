const input = document.getElementById("text");

const listTari=document.querySelectorAll("#tari option");


function filter()
{
    let text = input.value.toLowerCase();

    listTari.forEach(tari => {
        let numeTari = tari.getAttribute("data-name").toLowerCase();
        let matching = numeTari.includes(text);

        tari.style.display = matching ? "" : "none";
    });

};



input.addEventListener("input", filter);