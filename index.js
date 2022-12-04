/*[x]On mousover div runs away
  [x]- game alerts"won!" on div click
  [x]- A score counts how often div escaped

// Optional extra features

  []Game has a game over screen instead of alert
  []Game has a start button
  []Game has a restart button
  []Div starts at a random position
  []Div "appears" in the beginning
  []Div varies in appearance every time it runs away
  []Div Game has a "game over" condition e.g.
  []tries to catch
    
    Game has options
    []- Div color adjustable
    []- Div size adjustable
    []- Div speed adjustable*/

console.clear();

const div = document.querySelector('[data-js="div"]');
const score = document.querySelector('[data-js="p"]');
let divEscaped = 0;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

div.addEventListener("mouseover", () => {
  div.style.top = `${getRandomNumber(0, 100)}%`;
  div.style.left = getRandomNumber(0, 100) + `%`;

  divEscaped++;

  score.textContent = `div escaped: ${divEscaped}`;
});

div.addEventListener("click", () => {
  if (divEscaped <= 1) {
    alert("YOU WON " + `Div Escaped: ${divEscaped}` + " Time");
  } else alert("YOU WON " + `Div Escaped: ${divEscaped}` + " Times");
  divEscaped--;
  divEscaped = 0;
});
