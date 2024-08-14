function generatePoem(event) {
    event.preventDefault();

let poemElement = document.querySelector('.poem')
poemElement.innerHTML = "";

new Typewriter(poemElement, {
    strings: [
        "My Paris is a land where twilight days",
        "Merge into violent nights of black and gold;"
    ],
   autoStart: true,
   delay: 75,
   cursor: "",    
});
}
let poemForElement = document.querySelector('.form-container');
poemForElement.addEventListener("submit",generatePoem);
