var contentEle = document.body.querySelector(".content");

function makeHome() {
  contentEle.innerHTML = "Home Page";
}
function makeAbout() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  headEle.innerHTML = "About Page";
  contentEle.appendChild(headEle);
  var nameEle = document.createElement("h3");
  nameEle.innerHTML = "Valerie Luciano";
  contentEle.appendChild(nameEle);
}
function makeInteract() {
  contentEle.innerHTML = "";
  contentEle.innerHTML = "Interact Page";
  var i = 0;
  function buttonClick() {
    document.body.querySelector(".content").innerHTML = ++i;
  }
  document.body.querySelector(".button").addEventListener("click", function () {
    buttonClick();
  });
}
document.body
  .querySelector(".homeButton")
  .addEventListener("click", function () {
    makeHome();
  });
document.body
  .querySelector(".aboutButton")
  .addEventListener("click", function () {
    makeAbout();
  });
document.body
  .querySelector(".interactButton")
  .addEventListener("click", function () {
    makeInteract();
  });
makeHome();