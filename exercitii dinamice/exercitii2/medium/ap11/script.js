const inputText = document.getElementById("text");
const text = document.getElementById("pText").getElementsByTagName("span");

function search() {
    let searchText = inputText.value.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let originalText = text[i].textContent;
        let lowerText = originalText.toLowerCase();

        if (searchText && lowerText.includes(searchText)) {
            // Subliniem DOAR cuvântul găsit
            let highlightedText = originalText.replace(new RegExp(searchText, 'gi'), match => `<mark>${match}</mark>`);
            text[i].innerHTML = highlightedText;
        } else {
            // Dacă nu există potrivire sau inputul e gol, afișăm textul original fără subliniere
            text[i].innerHTML = originalText;
        }
    }
}

inputText.addEventListener("input", search);
