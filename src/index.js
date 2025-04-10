function generatePoem(event) {
    event.preventDefault()


new Typewriter("#poem", {
  strings: "A bold audacious frost",
  autoStart: true,
  delay: 1,
  cursor: "",
});
    
}


let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener('submit', generatePoem);