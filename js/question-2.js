// API key
// e4d79e243d474ef0b4b1ecde8bdca97b;

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e4d79e243d474ef0b4b1ecde8bdca97b";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  const response = await fetch(url);
  const results = await response.json();

  const facts = results.results;
  console.log(facts[0]);
  for (let i = 0; i < facts.length; i++) {
    console.log(facts[i]);

    if (i === 8) {
      break;
    }
    resultsContainer.innerHTML += `<div class='game'>
   <h3>#${i + 1} ${facts[i].name}</h3>
    Rating: ${facts[i].rating} |
    # of Tags: ${facts[i].tags.length}
    </div>
    `;
    console.log(results);
  }
}
getGames();
