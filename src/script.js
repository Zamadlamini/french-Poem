function displayPoem(response) {
    const poemText = response.data.answer;

    new Typewriter("#poemDisplay", {
        strings: poemText,
        autoStart: true,
        delay: 50,
        cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault(); 

   
    const prompt = document.querySelector("#poem").value;
    if (!prompt) return; 

    const apiKey = "d0oe273401dtba01620146af66a7adf3"; 
    const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&key=${apiKey}`;


    axios.get(apiURL)
        .then(displayPoem)
        .catch(error => console.error("Error fetching poem:", error));
}

document.querySelector(".form-container").addEventListener("submit", generatePoem);
