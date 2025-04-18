function displayPoem(response){


new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


function generatePoem(event) {
    event.preventDefault()

  let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "f3a1ab1884f405093fec0555dtb0oa41";
let prompt = ` User instructions: Generate a English poem about ${instructionsInput.value}`;
let context = 
"You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating"⏳Generating a English Poem about ${instructionsInput.value}</div>`;



axios.get(apiUrl).then(displayPoem);  
}


let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener('submit', generatePoem);