//challenge 1
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("changeTextButton");

button.addEventListener("click", function () {
  paragraph.textContent = " i changed it brodie";
});

//challenge 2
const highlightbutton = document.getElementById("highlightFirstCity");

highlightbutton.addEventListener("click", function () {
  let parent = document.getElementById("citiesList");
  parent.children[0].classList.add("highlight");
});

//example 3
const orderbutton = document.getElementById("changeOrder");

orderbutton.addEventListener("click", function () {
  let parentclass = document.getElementById("coffeeOrder");
  parentclass.children[0].textContent = "Espresso";

  parentclass.children[0].style.backgroundColor = "brown";
  parentclass.children[0].style.padding = "10px";
});

//example 4
//creating and inserting elements
const button4 = document.getElementById("addNewItem");
button4.addEventListener("click", function () {
  const newelement = document.createElement("li");
  newelement.textContent = "Eggs";

  const parent = document.getElementById("shoppingList");
  parent.appendChild(newelement);
});

//example5:
const removebutton = document.getElementById("removeLastTask");

removebutton.addEventListener("click", function () {
  let list = document.getElementById("taskList");
  //list.removeChild[2];
  list.children[2].remove();
});

//example 6
const button6 = document.getElementById("clickMeButton");
button6.addEventListener("mousedown", function () {
  alert("this is an alert");
});

//example 7
const tealist = document.getElementById("teaList");

tealist.addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    event.target.classList.add("highlight");
  }
});

//example 8:
let forms = document.getElementById("feedbackForm");
forms.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.getElementById("feedbackInput").value;

  let display = document.getElementById("feedbackDisplay");
  display.textContent = input;
});

//example 9 : DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Dom fully loaded";
});

//example 10: css class manipulation
const button10 = document.getElementById("toggleHighlight");
button10.addEventListener("click", function () {
  let text = document.getElementById("descriptionText");
  text.classList.toggle("highlight");
});
