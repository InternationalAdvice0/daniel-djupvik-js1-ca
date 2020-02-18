const result = document.querySelector(".results");

const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
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

function createHTML(json) {
  const APIResult = json.results;

  let html = "";
  for (let index = 0; index < APIResult.length; index++) {
    let typeValue = "Unknown";
    if (APIResult[index].type) {
      typeValue = APIResult[index].type;
    }
    html += `
    <div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">    
          <img class="image" src="${APIResult[index].image}" alt="Character Name">
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
