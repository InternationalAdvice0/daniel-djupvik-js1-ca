const result = document.querySelector(".result");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseUrl = "https://rickandmortyapi.com/api/episode/";
const url = baseUrl + id;

fetch(url)
  .then(function(Response) {
    return Response.json();
  })
  .then(function(json) {
    createDetails(json);
  })
  .catch(function() {
    const error = "error.html";
    //document.location.href = error;
  });

const detailsContainer = document.querySelector(".detail-container");
detailsContainer.classList.add("hidden");

function createDetails(API) {
  for (let index = 0; index < API.episode.length; index++) {
    let parts = `"${API.episode[index]}"`.split("/");
    let lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
    var noQuotes = lastSegment.split('"').join("");
  }
  const name = document.getElementById("status");
  name.innerText = API.name;
  const episodeNumber = document.getElementById("EpisodeNumber");
  episodeNumber.innerText = API.episode;

  const AirDate = document.getElementById("AirDate");
  AirDate.innerText = API.air_date;

  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
  detailsContainer.classList.remove("hidden");
}
