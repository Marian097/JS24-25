
let input = document.getElementById("text");
let p = document.getElementById("output");

input.addEventListener("input", function (){
    p.textContent = input.value;

});