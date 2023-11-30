// creiamo i 5 quadrati con i numeri casuali

// richiamiamo il div
let numbers = document.getElementById("grid");

for (i = 1; i <= 5; i++) {

    // richiamiamo la funzione del numero casuale
    const newNumbers = getRandomNumber(1, 50);

    console.log(newNumbers);

    // aggiungiamo il div, la classe e il numero casuale
    const elements = createAnElement("div", "square");

    elements.append(newNumbers);

    // implementiamo il tutto nel div
    numbers.append(elements);
}



// definiamo le funzioni
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function createAnElement(tag, attribute) {

    const createEl = document.createElement(tag);
    createEl.classList.add(attribute);

    return createEl;

}