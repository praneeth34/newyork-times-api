//url
// let homeurl =
//   "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let worldurl =
//   "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let politicsurl =
//   "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let magazineurl =
//   "https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let technologyurl =
//   "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let scienceurl =
//   "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let healthurl =
//   "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let sportsurl =
//   "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let artsurl =
//   "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let fashionurl =
//   "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let foodurl =
//   "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";
// let travelurl =
//   "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=CgtoQ94MGciOvH6W96PN3AlVaEFG1Q35";

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
let buttonGroup = document.createElement("nav");
buttonGroup.className =
  "navbar navbar-expand-lg navbar-light bg-light sticky-top";
container.appendChild(buttonGroup);
//toggler
let navbarToggler = document.createElement("button");
navbarToggler.className = "navbar-toggler";
navbarToggler.setAttribute("data-toggle", "collapse");
navbarToggler.setAttribute("data-target", "#collapse_target");
let togglerIcon = document.createElement("span");
togglerIcon.className = "navbar-toggler-icon";
navbarToggler.appendChild(togglerIcon);
buttonGroup.appendChild(navbarToggler);
//inner-navbar
let btnul = document.createElement("ul");
btnul.className = "navbar-nav";
let navContent = document.createElement("div");
navContent.className = "collapse navbar-collapse";
navContent.setAttribute("id", "collapse_target");
navContent.appendChild(btnul);
buttonGroup.appendChild(navContent);
//1
let item1 = document.createElement("li");
item1.className = "nav-item";
let homeBtn = document.createElement("button");
homeBtn.className = "btn";
homeBtn.setAttribute("type", "button");
homeBtn.innerHTML = "HOME";
homeBtn.id = "home";
homeBtn.setAttribute("onclick", loadcontent(homeBtn.id));
homeBtn.setAttribute("selected", true);
item1.appendChild(homeBtn);
btnul.appendChild(item1);
//2
let item2 = document.createElement("li");
item2.className = "nav-item";
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
item2.appendChild(worldBtn);
btnul.appendChild(item2);
//3
let item3 = document.createElement("li");
item3.className = "nav-item";
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
item3.appendChild(politicsBtn);
btnul.appendChild(item3);
//4
let item4 = document.createElement("li");
item4.className = "nav-item";
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
item4.appendChild(magazineBtn);
btnul.appendChild(item4);
//5
let item5 = document.createElement("li");
item5.className = "nav-item";
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
item5.appendChild(technologyBtn);
btnul.appendChild(item5);
//6
let item6 = document.createElement("li");
item6.className = "nav-item";
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
item6.appendChild(scienceBtn);
btnul.appendChild(item6);
//7
let item7 = document.createElement("li");
item7.className = "nav-item";
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
item7.appendChild(healthBtn);
btnul.appendChild(item7);
//8
let item8 = document.createElement("li");
item8.className = "nav-item";
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
item8.appendChild(sportsBtn);
btnul.appendChild(item8);
//9
let item9 = document.createElement("li");
item9.className = "nav-item";
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
item9.appendChild(artsBtn);
btnul.appendChild(item9);
//10
let item10 = document.createElement("li");
item10.className = "nav-item";
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
item10.appendChild(fashionBtn);
btnul.appendChild(item10);
//11
let item11 = document.createElement("li");
item11.className = "nav-item";
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
item11.appendChild(foodBtn);
btnul.appendChild(item11);
//12
let item12 = document.createElement("li");
item12.className = "nav-item";
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
item12.appendChild(travelBtn);
btnul.appendChild(item12);

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
      cardDiv.className = "card mb-3";
      container.append(cardDiv);
      //inner card
      let cardRow = document.createElement("div");
      cardRow.className = "row no-gutters";
      cardDiv.appendChild(cardRow);
      //body
      let cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "col-lg-8 col-md-12";
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
      cardImgDiv.className = "col-md-12 col-lg-4";
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
