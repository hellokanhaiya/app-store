const root2 = document.getElementById("older-post");

// Filter apps based on their genreId
const filteredApps = apps.filter((app) => app.genreId === "EDUCATION");

// Initialize pagination variables
let currentPage = 1;
const itemsPerPage = 21;
let totalPages = Math.ceil(filteredApps.length / itemsPerPage);
const maxShownPages = 5;

function renderPagination() {
  let paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  let preButton = document.createElement("button");
  preButton.innerText = "Previous";
  preButton.classList.add("previous");
  preButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      renderContent();
      renderPagination();
    }
  });
  paginationContainer.appendChild(preButton);

  let startIndex = Math.max(1, currentPage - Math.floor(maxShownPages / 2));
  let endIndex = Math.min(totalPages, startIndex + maxShownPages - 1);

  for (let i = startIndex; i <= endIndex; i++) {
    let pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.classList.add("indexPage");
    pageButton.addEventListener("click", function () {
      currentPage = parseInt(this.innerText);
      renderContent();
      renderPagination();
    });
    if (i === currentPage) {
      pageButton.disabled = true;
    }
    paginationContainer.appendChild(pageButton);
  }

  let nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.classList.add("next");
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      renderContent();
      renderPagination();
    }
  });
  paginationContainer.appendChild(nextButton);
}

function renderContent() {
  root2.innerHTML = ""; // Clear previous content

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredApps.length);

  for (let i = startIndex; i < endIndex; i++) {
    const app = filteredApps[i];
    const truncatedTitle =
      app.title.length > 17 ? `${app.title.slice(0, 17)}...` : app.title;
    const releasedDate = app.released ? app.released : "17 Oct 2017";
    const el = document.createElement("div");
    el.innerHTML = `<div class=" same-content">
      <div class="card" >
        <img
          src="${app.icon}"
          class="card-img"
          alt="${app.title}"
        />
        <div class="card-body">
          <h5 class="card-title light-black">${truncatedTitle}</h5>
          <p class="card-text light-black">${releasedDate}</p>
          <a href="/single-app.html?appId=${app.appId}" class="btn hover-btn btn-primary1"><i class="fa fa-download"></i>Download</a>
        </div>
      </div>
    </div>`;
    root2.appendChild(el.firstElementChild);
  }

  // Render pagination buttons
  renderPagination();
}

// Initial render
renderContent();
document
  .getElementById("search-input")
  .addEventListener("keypress", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter" || event.code === "Enter") {
      event.preventDefault();
      var inputTextValue = document.getElementById("search-input").value;
      window.location.href = "../search.html";
    }
  });
