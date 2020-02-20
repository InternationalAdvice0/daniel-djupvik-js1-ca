const container = document.querySelector(".container .loader");
const result = document.querySelector(".results");
const nextButton = document.querySelector(".nextPage");
const prevButton = document.querySelector(".prevPage");
const pageNumber = document.querySelector(".pageNr");
const itemCount = document.querySelector(".itemCount");
let number = 1;
let nextBase = "";
let prevBase = "";

let baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
  .then(function(Response) {
    return Response.json();
  })
  .then(function(json) {
    createHTML(json);
  })
  .catch(function() {
    let error = "error.html";
    //document.location.href = error;
  });

function createHTML(json) {
  const APIResult = json.results;
  let currentItemCount = APIResult.length;
  nextBase = json.info.next;
  prevBase = json.info.prev;

  pageNumber.innerText = "Current Page: " + number;
  itemCount.innerText = "Items on website: " + currentItemCount;
  container.classList.add("hidden");

  let html = "";
  for (let index = 0; index < APIResult.length; index++) {
    let typeValue = "Unknown";
    if (APIResult[index].type) {
      typeValue = APIResult[index].type;
    }
    html += `
    <div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">    
          <img class="image" src="${APIResult[index].image}" alt="${APIResult[index].name}">
          <div class="details">
              <h4 class="name">${APIResult[index].name}</h4>
              <p>Type: ${typeValue}</p>    
              <p>Episode count: ${APIResult[index].episode.length}</p>                                  
              <a class="btn btn-primary" href="details.html?id=${APIResult[index].id}">Details</a>
          </div>
      </div>
    </div>`;
  }
  result.innerHTML = html;
}

// ------------- TEST -------------
nextButton.addEventListener("click", GoToNextPage);
function GoToNextPage() {
  container.classList.remove("hidden");
  number++;
  console.log(nextBase);
  nextPage(nextBase);
}

prevButton.addEventListener("click", GoToPrevPage);
function GoToPrevPage() {
  container.classList.remove("hidden");
  number--;
  console.log(prevBase);
  nextPage(prevBase);
}
function nextPage(url) {
  fetch(url)
    .then(function(Response) {
      return Response.json();
    })
    .then(function(json) {
      createHTML(json);
    })
    .catch(function() {
      let error = "error.html";
      document.location.href = error;
    });
}
