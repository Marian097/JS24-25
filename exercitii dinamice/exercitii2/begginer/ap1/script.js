const button = document.getElementById("button");
const paragraf = document.getElementById("paragraf");

button.addEventListener("click", function() {
    let pNou = "Acesta este un nou paragraf";
    paragraf.textContent = pNou;
});
