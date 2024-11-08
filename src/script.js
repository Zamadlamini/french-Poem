function displayPoem(response) {
    let poemText = response.data.answer;

    const poemLines = poemText.split("\n").slice(0, 4);

    const poemDisplay = document.querySelector("#poemDisplay");
    poemDisplay.innerHTML = "";

    const typewriter = new Typewriter(poemDisplay, {
        autoStart: true,
        delay: 50,
        cursor: ""
    });

    poemLines.forEach(line => {
        typewriter.typeString(line + "<br>").pauseFor(500).start();
    });
}


function generatePoem(event) {
    event.preventDefault(); 

    const topic = document.querySelector("#poem").value;
    if (!topic) return; 

    const prompt = `Write a four-line French poem about ${topic}. Each line should appear one by one.`;
    const apiKey = "d0oe273401dtba01620146af66a7adf3"; 
    const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&key=${apiKey}`;


    axios.get(apiURL)
        .then(displayPoem)
        .catch(error => console.error("Error fetching poem:", error));
}

// Add event listener to form submission
document.querySelector(".form-container").addEventListener("submit", generatePoem);
