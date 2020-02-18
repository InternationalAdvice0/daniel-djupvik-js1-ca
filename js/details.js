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
  const img = document.querySelector(".details-image");
  img.src = API.image;

  const name = document.querySelector("h1");
  name.innerText = API.name;

  const status = document.getElementById("status");
  status.innerText = API.status;

  const species = document.getElementById("species");
  species.innerText = API.species;

  const origin = document.getElementById("origin");
  origin.innerText = API.origin.name;

  const location = document.getElementById("location");
  location.innerText = API.location.name;

  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
  detailsContainer.classList.remove("hidden");

  document.title = API.name + " | " + document.title;
}
