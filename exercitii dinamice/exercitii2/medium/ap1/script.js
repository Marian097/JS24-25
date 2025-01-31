
const input = document.getElementById("search");
let lista = document.getElementById("container").getElementsByTagName("li");
let mesaj = document.getElementById("output");


input.addEventListener("input", function () {
    let text = input.value.toLowerCase();
    let gasit = false;

    for (let i = 0; i < lista.length; i++ )
    {
        let item = lista[i].textContent.toLowerCase();
        if (item.includes(text))
        {
            lista[i].style.display="";
            gasit = true;
        }
        else
        {
            lista[i].style.display="none";
        }
    }
    mesaj.style.display = gasit ? "none" : "block";

   
   
});