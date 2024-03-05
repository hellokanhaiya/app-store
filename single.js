// function getQueryParameters() {
//   let queryString = window.location.search.substring(1);
//   let queryParams = {};

//   let pairs = queryString.split("&");

//   for (let i = 0; i < pairs.length; i++) {
//     let pair = pairs[i].split("=");
//     if (pair.length === 2) {
//       let key = decodeURIComponent(pair[0]);
//       let value = decodeURIComponent(pair[1]);
//       queryParams[key] = value;
//     }
//   }

//   return queryParams;
// }

// // Example usage:
const searchParams = getQueryParameters();

if (searchParams.appId) {
  app = apps.find((app) => app.appId === searchParams.appId);
  if (app) {
    const root = document.getElementById("root");
    const el = document.createElement("div");
    const truncatedTitle =
      app.title.length > 17 ? `${app.title.slice(0, 25)}...` : app.title;
    el.innerHTML = `<div class="">
    <div class="download-app" style="">
    <div class="all-virson-deatil">
  <div class="flex-body another-class">
    <div class="img-box">
      <img  class="single-img" src="${app.icon}" alt="${app.title}" />
    </div>
    <div class="title-update">
      <div><h4>${app.title}</h4></div>
      <div>
        <p>Update on <em>Last updated on </em>${app.released}</p>
      </div>
      <div class="down-width">
      <span id="down">
        <a class="download-get-play" href="#go-to-download"><i class="fa fa-download"></i> Download</a>
      </span>
    </div>
    </div>
  </div>
  
  
  </div>
  <div style="margin-top: 1.5rem;"> 
    <table>
      <tbody >
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
              ></path>
            </svg>
            Name
          </th>
          <td>${app.title}</td>
          <td></td>
        </tr>
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
              ></path>
              </svg>
              summary
          </th>
          <td>${app.summary}</td>
          <td></td>
        </tr>
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
              </svg>
              Genre
          </th>
          <td>${app.genre}</td>
          <td></td>
        </tr>
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"
              ></path>
            </svg>
            Video
          </th>
          <td class="extra">${app.video}</td>
          <td></td>
        </tr>
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"
              ></path>
            </svg>
            Version
          </th>
          <td>${app.version}</td>
          <td></td>
        </tr>
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path class="svg-path"
             
                d="M461.453,107.866c-38.887-55.395-97.018-92.33-163.685-104.003S163.879,7.177,108.485,46.064  C53.091,84.95,16.155,143.081,4.482,209.748l67.537,11.825C89.595,121.19,185.561,53.823,285.943,71.399  s167.75,113.542,150.173,213.924s-113.542,167.75-213.924,150.173c-15.5-2.714-30.404-7.308-44.516-13.701l27.664-35.299  L56.625,371.24l50.358,140.758l27.503-35.093c23.671,12.669,49.143,21.446,75.881,26.127  c66.667,11.673,133.889-3.315,189.283-42.201s92.33-97.017,104.002-163.684C515.326,230.482,500.339,163.26,461.453,107.866z"
              ></path>
              <g style="opacity: 0.1">
                <path
                  d="M142.767,57.491C198.161,18.604,265.383,3.617,332.05,15.29c6.64,1.163,13.192,2.587,19.652,4.244   C334.556,12.417,316.5,7.142,297.768,3.863C231.101-7.81,163.879,7.177,108.485,46.064S16.155,143.081,4.482,209.748l35.267,6.175   C52.407,151.459,88.833,95.352,142.767,57.491z"
                ></path>
              </g>
              <polygon class="svg-polygon"
                
                points="383.961,288.066 225.077,288.066 225.077,129.182 270.786,129.182 270.786,242.357   383.961,242.357 "
              ></polygon>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            Realsed
          </th>
          <td>${app.released}</td>
          <td></td>
        </tr>
        <tr>
          <th class="centered">
            <svg
              class="svg-5 svg-primary mr-1 custom-width"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            Get it On
          </th>
          <td>Play Store</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    <!--  <div class="flex-body1">
        <div class="img-padding">
          <img src="${app.icon}" class="card-img-dwonload" alt="${app.title}" />
        </div>
        <div class="share-post">
        <h1 class="share-blog">${truncatedTitle}</h1>
        <div class="soical">
          <ul>
            <li>
              <a class="box box-1" href="#" target="_blank"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a class="box box-2" href="#" target="_blank"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a class="box box-3" href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
            </li>
            <li>
              <a class="box box-4" href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
            </li>
          </ul>
        </div>
        <div class="post-info">

        <div>

        <span class="lebal-info"
          ><a class="rating" href="#"><i class="fa fa-star"></i>Apps</a>
          <a class="rating" href="#"><i class="fa fa-star"></i>Photography</a></
        >
        </div>
          <div>

          <span class="time-info">
          <a class="view-all  hover-btn" href="#"
          >
          <i class="fa fa-clock-o"></i><span class="today-time"></span>
        </a>
          </span>
          </div>
        </div>
      </div>

      </div> -->
      <div class="card-body4" style="width: 100%;>
        <p class="card-text3"> <h4 class="description">The description of ${app.title} </h5>${app.descriptionHTML}</p></br>
        <a id="go-to-download"  href="${app.url}" class="btn hover-btn btn-primary2 donload"><i class="fa fa-download"></i>Download</a>
      </div>
    </div>
  </div>
  `;
    root.appendChild(el.firstElementChild);
  } else {
    console.log("No App Found for this id");
  }
} else {
  console.log("Please Provide appId");
}

function getQueryParameters() {
  let queryString = window.location.search.substring(1);
  let queryParams = {};

  let pairs = queryString.split("&");

  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    if (pair.length === 2) {
      let key = decodeURIComponent(pair[0]);
      let value = decodeURIComponent(pair[1]);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

// Function to filter similar apps based on genre ID
function showSimilarApps(genreId) {
  const similarApps = [];

  // Filter out apps with the same genreId
  apps.forEach((app) => {
    if (app.genreId === genreId) {
      similarApps.push(app);
    }
  });

  // Clear the root1 element before appending new similar apps
  const root1 = document.getElementById("root1");
  root1.innerHTML = "";

  // Append similar apps to root1
  similarApps.forEach((app) => {
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
            <a  href="/single-app.html?appId=${app.appId}" class="btn hover-btn btn-primary1"><i class="fa fa-download"></i>Download</a>
          </div>
        </div>
      </div>`;
    root1.appendChild(el.firstElementChild);
  });
}

// Example usage:
document.addEventListener("DOMContentLoaded", function () {
  const searchParams = getQueryParameters();

  if (searchParams.appId) {
    const app = apps.find((app) => app.appId === searchParams.appId);
    if (app) {
      // Show similar apps based on the genreId of the opened app
      showSimilarApps(app.genreId);
    } else {
      console.log("No App Found for this id");
    }
  } else {
    console.log("Please Provide appId");
  }
});

document
  .getElementById("search-input")
  .addEventListener("keypress", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter" || event.code === "Enter") {
      event.preventDefault();
      let inputTextValue = document.getElementById("search-input").value;
      window.location.href = "./search.html";
    }
  });

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#down").addEventListener("click", function (event) {
//     event.preventDefault();

//     let targetElement = document.querySelector("#go-to-download");
//     let targetPosition =
//       targetElement.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: targetPosition - 100,
//       behavior: "smooth",
//     });

//     let count = 5;
//     let countdownInterval = setInterval(function () {
//       if (count > 0) {
//         document.querySelector("#go-to-download").innerHTML =
//           '<i class="fa fa-download"></i> Please wait... ' + count;
//         count--;
//       } else {
//         document.querySelector("#go-to-download").innerHTML =
//           '<i class="fa fa-download"></i> Download';
//         clearInterval(countdownInterval);
//       }
//     }, 1000);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#down").addEventListener("click", function (event) {
    event.preventDefault();

    let targetElement = document.querySelector("#go-to-download");
    let targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition - 100,
      behavior: "smooth",
    });

    let count = 5;
    let countdownInterval = setInterval(function () {
      if (count > 0) {
        document.querySelector("#go-to-download").innerHTML =
          '<i class="fa fa-download"></i> Please wait... ' + count;
        count--;
      } else {
        clearInterval(countdownInterval);
        document.querySelector("#go-to-download").innerHTML =
          '<i class="fa fa-download"></i> Download';
        document.querySelector("#second-download").style.display = "inline"; // Show the second download button
      }
    }, 1000);
  });
});
