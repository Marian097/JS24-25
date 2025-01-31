const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", function () {
    let pNou=document.createElement("p");
    pNou.textContent="Acesta este un paragraf creat in javascript";
    container.appendChild(pNou);
});