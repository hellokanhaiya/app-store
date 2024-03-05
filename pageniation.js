let currentPage = 1;
let totalPages = Math.ceil(apps.length / 21); // Total pages based on 21 apps per page
let maxShownPages = 5;

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
  const root = document.getElementById("content");
  root.innerHTML = ""; // Clear previous content

  const startIndex = (currentPage - 1) * 21;
  const endIndex = Math.min(startIndex + 21, apps.length);

  for (let i = startIndex; i < endIndex; i++) {
    const app = apps[i];
    // const truncatedTitle =
    //   app.title.length > 17 ? `${app.title.slice(0, 17)}...` : app.title;
    // const releasedDate = app.released ? app.released : "17 Oct 2017";
    const el = document.createElement("div");
    el.innerHTML = `<div class="same-content old-post-box">
      <div class="card">
        <img
          src="${app.icon}"
          class="card-img"
          alt="${app.title}"
        />
        <div class="card-body">
          <h5 class="card-title light-black">${app.title}</h5>
          <p class="card-text light-black">${app.released}</p>
          <a href="/single-app.html?appId=${app.appId}" class="btn hover-btn btn-primary1"><i class="fa fa-download"></i>Download</a>
        </div>
      </div>
    </div>`;
    root.appendChild(el.firstElementChild);
  }
}

// Initial render
renderContent();
renderPagination();

document
  .getElementById("search-input")
  .addEventListener("keypress", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter" || event.code === "Enter") {
      event.preventDefault();
      var inputTextValue = document.getElementById("search-input").value;
      window.location.href = "./search.html";
    }
  });
