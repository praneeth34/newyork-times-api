//url
let homeurl =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let worldurl =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let politicsurl =
  "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let magazineurl =
  "https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let technologyurl =
  "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let scienceurl =
  "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let healthurl =
  "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let sportsurl =
  "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let artsurl =
  "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let fashionurl =
  "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let foodurl =
  "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
let travelurl =
  "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";

//container
let container = document.createElement("div");
container.className = "container";
//heading
let heading = document.createElement("h1");
heading.innerHTML = "newyork times";
container.appendChild(heading);
let line1 = document.createElement("hr");
container.appendChild(line1);
//navbar
let buttonGroup = document.createElement("div");
buttonGroup.className = "btn-group";
buttonGroup.setAttribute("role", "group");
buttonGroup.setAttribute("style", "display:flex");
buttonGroup.setAttribute("aria-label", "pages");
container.appendChild(buttonGroup);
//inner-navbar
//1
let homeBtn = document.createElement("button");
homeBtn.className = "btn";
homeBtn.setAttribute("type", "button");
homeBtn.innerHTML = "HOME";
homeBtn.id = "home";
homeBtn.setAttribute("onclick", loadcontent(homeBtn.id));
homeBtn.setAttribute("selected", true);
buttonGroup.appendChild(homeBtn);
//2
let worldBtn = document.createElement("button");
worldBtn.className = "btn";
worldBtn.setAttribute("type", "button");
worldBtn.innerHTML = "WORLD";
worldBtn.id = "world";
worldBtn.addEventListener(
  "click",
  function () {
    loadcontent(worldBtn.id);
  },
  true
);
buttonGroup.appendChild(worldBtn);
//3
let politicsBtn = document.createElement("button");
politicsBtn.className = "btn";
politicsBtn.setAttribute("type", "button");
politicsBtn.innerHTML = "POLITICS";
politicsBtn.id = "politics";
politicsBtn.addEventListener(
  "click",
  function () {
    loadcontent(politicsBtn.id);
  },
  true
);
buttonGroup.appendChild(politicsBtn);
//4
let magazineBtn = document.createElement("button");
magazineBtn.className = "btn";
magazineBtn.setAttribute("type", "button");
magazineBtn.innerHTML = "MAGAZINE";
magazineBtn.id = "magazine";
magazineBtn.addEventListener(
  "click",
  function () {
    loadcontent(magazineBtn.id);
  },
  true
);
buttonGroup.appendChild(magazineBtn);
//5
let technologyBtn = document.createElement("button");
technologyBtn.className = "btn";
technologyBtn.setAttribute("type", "button");
technologyBtn.innerHTML = "TECHNOLOGY";
technologyBtn.id = "technology";
technologyBtn.addEventListener(
  "click",
  function () {
    loadcontent(technologyBtn.id);
  },
  true
);
buttonGroup.appendChild(technologyBtn);
//6
let scienceBtn = document.createElement("button");
scienceBtn.className = "btn";
scienceBtn.setAttribute("type", "button");
scienceBtn.innerHTML = "SCIENCE";
scienceBtn.id = "science";
scienceBtn.addEventListener(
  "click",
  function () {
    loadcontent(scienceBtn.id);
  },
  true
);
buttonGroup.appendChild(scienceBtn);
//7
let healthBtn = document.createElement("button");
healthBtn.className = "btn";
healthBtn.setAttribute("type", "button");
healthBtn.innerHTML = "HEALTH";
healthBtn.id = "health";
healthBtn.addEventListener(
  "click",
  function () {
    loadcontent(healthBtn.id);
  },
  true
);
buttonGroup.appendChild(healthBtn);
//8
let sportsBtn = document.createElement("button");
sportsBtn.className = "btn";
sportsBtn.setAttribute("type", "button");
sportsBtn.innerHTML = "SPORTS";
sportsBtn.id = "sports";
sportsBtn.addEventListener(
  "click",
  function () {
    loadcontent(sportsBtn.id);
  },
  true
);
buttonGroup.appendChild(sportsBtn);
//9
let artsBtn = document.createElement("button");
artsBtn.className = "btn";
artsBtn.setAttribute("type", "button");
artsBtn.innerHTML = "ARTS";
artsBtn.id = "arts";
artsBtn.addEventListener(
  "click",
  function () {
    loadcontent(artsBtn.id);
  },
  true
);
buttonGroup.appendChild(artsBtn);
//10
let fashionBtn = document.createElement("button");
fashionBtn.className = "btn";
fashionBtn.setAttribute("type", "button");
fashionBtn.innerHTML = "FASHION";
fashionBtn.id = "fashion";
fashionBtn.addEventListener(
  "click",
  function () {
    loadcontent(fashionBtn.id);
  },
  true
);
buttonGroup.appendChild(fashionBtn);
//11
let foodBtn = document.createElement("button");
foodBtn.className = "btn";
foodBtn.setAttribute("type", "button");
foodBtn.innerHTML = "FOOD";
foodBtn.id = "food";
foodBtn.addEventListener(
  "click",
  function () {
    loadcontent(foodBtn.id);
  },
  true
);
buttonGroup.appendChild(foodBtn);
//12
let travelBtn = document.createElement("button");
travelBtn.className = "btn";
travelBtn.setAttribute("type", "button");
travelBtn.innerHTML = "TRAVEL";
travelBtn.id = "travel";
travelBtn.addEventListener(
  "click",
  function () {
    loadcontent(travelBtn.id);
  },
  true
);
buttonGroup.appendChild(travelBtn);

let line2 = document.createElement("hr");
container.appendChild(line2);

//home view
async function loadcontent(name) {
  try {
    let news = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35`
    );
    let response = await news.json();
    console.log(response);
    response.results.map((article) => {
      let cardDiv = document.createElement("div");
      cardDiv.className = "card mb-4";
      container.appendChild(cardDiv);
      //inner card
      let cardRow = document.createElement("div");
      cardRow.className = "row no-gutters";
      cardDiv.appendChild(cardRow);
      //body
      let cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "col-md-8";
      cardRow.appendChild(cardBodyDiv);
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBodyDiv.appendChild(cardBody);
      let tag = document.createElement("h5");
      tag.innerHTML = `${article.section}`;
      tag.setAttribute("style", "text-transform: uppercase;");
      cardBody.appendChild(tag);
      let title = document.createElement("h5");
      title.className = "titlecard";
      title.innerHTML = article.title;
      cardBody.appendChild(title);
      let date = document.createElement("p");
      date.className = "datecard";
      let dateEff = document.createElement("small");
      dateEff.className = "text-muted";
      dateEff.innerHTML = new Date(article.created_date).toDateString();
      date.appendChild(dateEff);
      cardBody.appendChild(date);
      let abstract = document.createElement("p");
      abstract.className = "abstractcard";
      abstract.innerHTML = article.abstract;
      cardBody.appendChild(abstract);
      let cont = document.createElement("div");
      cont.id = "continue-row";
      let continueReading = document.createElement("a");
      continueReading.setAttribute("href", article.url);
      continueReading.className = "continueReading";
      continueReading.innerHTML = "Continue reading";
      continueReading.setAttribute("style", "color:blue");
      cont.appendChild(continueReading);
      let byline = document.createElement("p");
      byline.innerHTML = `<small>(${article.item_type}) ${article.byline}</small>`;
      byline.setAttribute("style", "text-align:right");
      cont.appendChild(byline);
      cardBody.appendChild(cont);
      //image
      let cardImgDiv = document.createElement("div");
      cardImgDiv.className = "col-md-4";
      cardRow.appendChild(cardImgDiv);
      let cardImg = document.createElement("img");
      cardImg.className = "card-img thumbnail";
      cardImg.setAttribute("src", article.multimedia[4].url);
      cardImg.setAttribute("alt", article.multimedia[0].url);
      cardImg.setAttribute("style", "height:100%");
      cardImgDiv.appendChild(cardImg);
    });
  } catch (err) {
    alert(err);
  }
}

let scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "btnScrollToTop";
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
let icon = document.createElement("i");
icon.className = "material-icons";
icon.innerHTML = "arrow_upward";
scrollTopBtn.appendChild(icon);
container.appendChild(scrollTopBtn);

//world news
// function loadcontent(name) {
//   fetch(
//     `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       data.results.forEach((article) => {
//         let cardDiv = document.createElement("div");
//         cardDiv.className = "card mb-3";
//         container.appendChild(cardDiv);
//         //inner card
//         let cardRow = document.createElement("div");
//         cardRow.className = "row no-gutters";
//         cardDiv.appendChild(cardRow);

//         //body
//         let cardBodyDiv = document.createElement("div");
//         cardBodyDiv.className = "col-md-8";
//         cardRow.appendChild(cardBodyDiv);
//         let cardBody = document.createElement("div");
//         cardBody.className = "card-body";
//         cardBodyDiv.appendChild(cardBody);
//         let tag = document.createElement("h5");
//         tag.innerHTML = "WORLD";
//         cardBody.appendChild(tag);
//         let title = document.createElement("h5");
//         title.className = "card-title";
//         title.innerHTML = article.title;
//         cardBody.appendChild(title);
//         let date = document.createElement("p");
//         date.className = "card-text";
//         let dateEff = document.createElement("small");
//         dateEff.className = "text-muted";
//         dateEff.innerHTML = new Date().toDateString();
//         date.appendChild(dateEff);
//         cardBody.appendChild(date);
//         let abstract = document.createElement("p");
//         abstract.className = "card-text";
//         abstract.innerHTML = article.abstract;
//         cardBody.appendChild(abstract);
//         let continueReading = document.createElement("a");
//         continueReading.setAttribute("href", article.url);
//         continueReading.innerHTML = "continue reading";
//         continueReading.setAttribute("style", "color:blue");
//         cardBody.appendChild(continueReading);
//         //image
//         let cardImgDiv = document.createElement("div");
//         cardImgDiv.className = "col-md-4";
//         cardRow.appendChild(cardImgDiv);
//         let cardImg = document.createElement("img");
//         cardImg.className = "card-img";
//         cardImg.setAttribute("src", article.multimedia[0].url);
//         cardImg.setAttribute("style", "height: 100%;");
//         cardImgDiv.appendChild(cardImg);
//       });
//     });
// }

document.getElementsByTagName("body")[0].appendChild(container);
