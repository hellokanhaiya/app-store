const weekly_trending = [
  "com.facebook.katana",
  "com.tencent.ig",
  "org.mozilla.firefox",
  "com.google.android.youtube",
  "video.downloader.videodownloader",
  "com.smartswitch.phonecloneapp.easydatatransfer.alldatatransfer",
  "com.instagram.android",
];

const root = document.getElementById("weekly-trending");

weekly_trending.forEach((appId) => {
  const app = apps.find((app) => app.appId === appId); // Find the app object corresponding to the appId
  if (app) {
    const truncatedTitle =
      app.title.length > 15 ? `${app.title.slice(0, 15)}...` : app.title;
    const releasedDate = app.released ? app.released : "17 Oct 2017";
    const el = document.createElement("div");
    el.innerHTML = `<div class="col weekly-box ">
      <div class="card1" >
        <img
          src="${app.icon}"
          class="card-img-top"
          alt="${app.title}"
        />
        <div class="card-body1">
         <h5 class="card-title light-black">${truncatedTitle}</h5> 
          <p class="card-text light-black">${releasedDate}</p>
          <a href="/single-app.html?appId=${app.appId}" class="btn btn-primary"><i class="fa fa-download"></i>Download</a>
        </div>
      </div>
    </div>`;
    root.appendChild(el.firstElementChild);
  }
});
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
const root1 = document.getElementById("featured-apps");

Feature_trending.forEach((appId) => {
  const app = apps.find((app) => app.appId === appId);
  if (app) {
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
    root1.appendChild(el.firstElementChild);
  }
});
const Feature_games = [
  "com.scopely.monopolygo",
  "com.tencent.ig",
  "com.fingersoft.hillclimb",
  "com.roblox.client",
  "com.kiloo.subwaysurf",
  "com.crazy.block.robo.monster.cliffs.craft",
  "com.wood.nut.and.bolts.puzzle",
  "com.robtopx.geometryjumplite",
  "com.bonnie.trafficescape",
  "io.supercent.pizzaidle",
  "com.Polystation.BuildABabe",
  "com.gamebrain.hexasort",
];
const root2 = document.getElementById("featured-games");

Feature_games.forEach((appId) => {
  const app = apps.find((app) => app.appId === appId);
  if (app) {
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
});
const recent_add = [
  "com.pinterest",
  "com.life360.android.safetymapd",
  "com.fingersoft.hillclimb",
  "cashgiraffe.app",
  "com.nextdoor",
  "com.scopely.monopolygo",
  "com.ringapp",
  "com.amazon.dee.app",
  "com.tencent.ig",
  "com.roblox.client",
  "racearena.io",
  "com.gameloft.android.ANMP.GloftA9HM",
];
// const root3 = document.getElementById("recent-add");

// recent_add.forEach((appId) => {
//   const app = apps.find((app) => app.appId === appId);
//   if (app) {
//     const truncatedTitle =
//       app.title.length > 17 ? `${app.title.slice(0, 17)}...` : app.title;
//     const releasedDate = app.released ? app.released : "17 Oct 2017";
//     const el = document.createElement("div");
//     el.innerHTML = `<div class=" same-content">
//         <div class="card" >
//          <img
//              src="${app.icon}"
//              class="card-img"
//              alt="${app.title}"
//         />
//           <div class="card-body">
//             <h5 class="card-title light-black">${truncatedTitle}</h5>
//             <p class="card-text light-black">${releasedDate}</p>
//             <a href="/single-app.html?appId=${app.appId}" class="btn hover-btn btn-primary1"><i class="fa fa-download"></i>Download</a>
//           </div>
//         </div>
//       </div>`;
//     root3.appendChild(el.firstElementChild);
//   }
// });
const root3 = document.getElementById("recent-add");

// Show searching message initially
showSearchingMessage();

// Function to display searching message
function showSearchingMessage() {
  const el = document.createElement("div");
  el.innerHTML = `<div class="same-content">
      <p class="light-black">Searching...</p>
    </div>`;
  root3.appendChild(el.firstElementChild);
}

// Check if content is loaded
if (recent_add.length === 0) {
  // If content is not loaded yet, display searching message
  showSearchingMessage();
} else {
  // If content is loaded, display actual content
  displayContent();
}

// Function to display actual content
function displayContent() {
  root3.innerHTML = ""; // Clear previous searching message
  recent_add.forEach((appId) => {
    const app = apps.find((app) => app.appId === appId);
    if (app) {
      const truncatedTitle =
        app.title.length > 17 ? `${app.title.slice(0, 17)}...` : app.title;
      const releasedDate = app.released ? app.released : "17 Oct 2017";
      const el = document.createElement("div");
      el.innerHTML = `<div class="same-content">
          <div class="card">
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
      root3.appendChild(el.firstElementChild);
    }
  });
}

const popular_post = [
  "com.whatsapp",
  "com.tencent.ig",
  "org.mozilla.firefox",
  "com.life360.android.safetymapd",
  "com.fingersoft.hillclimb",
];
const root4 = document.getElementById("add-here");
popular_post.forEach((appId) => {
  const app = apps.find((app) => app.appId === appId);
  if (app) {
    // const truncatedTitle =
    //   app.title.length > 17 ? `${app.title.slice(0, 17)}...` : app.title;
    const el = document.createElement("li");
    el.innerHTML = `<div class="main-div">
    <img
    src="${app.icon}"
    class="card-img"
    alt="${app.title}"
  />
 <p class="card-text light-black">${app.title}</p>
</div> `;
    root4.appendChild(el.firstElementChild);
  }
});

//  current-Year footer section

const now = new Date();
const current_year = now.getFullYear();
const year = document.getElementById("current-year");
year.innerHTML = current_year;

//  input tag rediection
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
