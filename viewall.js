const Feature_trending = [
  "com.wbd.stream",
  "com.whatsapp",
  "com.opera.browser",
  "org.mozilla.firefox",
  "com.twitter.android",
  "com.vibra.wallpaper",
  "com.picsart.studio",
  "com.facebook.orca",
  "com.facebook.katana",
  "com.instagram.barcelona",
  "com.lemon.lvoverseas",
  "org.telegram.messenger",
];
const root1 = document.getElementById("older-post");

Feature_trending.forEach((appId) => {
  const app = apps.find((app) => app.appId === appId);
  if (app) {
    const truncatedTitle =
      app.title.length > 17 ? `${app.title.slice(0, 17)}...` : app.title;
    const releasedDate = app.released ? app.released : "17 Oct 2017";
    const el = document.createElement("div");
    el.innerHTML = `<div class=" same-content old-post-box">
        <div class="card " >
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
    root1.appendChild(el.firstElementChild);
  }
});

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
