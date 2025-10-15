function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3oa2b4640a831a6act8f0d75a77730e5";
  let prompt = `User instructions: Please generate a poem in english about ${instructionsInput.value}`;
  let context =
    "You are an expert in lyric poetry and love writing short poems. Your mission is to write a 4 line poem in basic HTML format using a <p> element and separate each line with a <br />. Do not include a title for the poem. Make sure to follow the user's instructions. Sign the poem with 'SheCodes AI' in a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem for you about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
