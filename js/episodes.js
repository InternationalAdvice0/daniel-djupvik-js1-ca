const result = document.querySelector(".result");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseUrl = "https://rickandmortyapi.com/api/character/";
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
  const goBack = document.querySelector(".breadcrumb-nav a");
  goBack.href = `./details.html?id=${API.id}`;
  goBack.innerText = "Back to " + API.name;

  let html = "";
  for (let index = 0; index < API.episode.length; index++) {
    let parts = `"${API.episode[index]}"`.split("/");
    let lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
    var noQuotes = lastSegment.split('"').join("");

    html += `<p><a class="value btn btn-primary" href="episode-details.html?id=${noQuotes}">Episode ${noQuotes}</a></p>`;
  }
  result.innerHTML = html;

  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
  detailsContainer.classList.remove("hidden");
}
