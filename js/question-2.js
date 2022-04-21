const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e4d79e243d474ef0b4b1ecde8bdca97b";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;

    resultsContainer.innerHTML = "";
    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }
      resultsContainer.innerHTML += `<div class='game'>
     <h3>#${i + 1} : ${games[i].name}</h3>
      Rating: ${games[i].rating} |
      # of Tags: ${games[i].tags.length}
      </div>
      `;
    }
  } catch (error) {
    resultsContainer.innerHTML = displayError("Failed to fetch data from API");
  }
}
getGames();
