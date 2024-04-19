const toggleBtn = document.querySelector("#essenceCartBtn");
const itemContainer = document.querySelector(".right-hidden-cart");
const itemList = document.querySelector("#itemList");

toggleBtn.addEventListener("click", () => {
  itemContainer.classList.toggle("open");
});



let collection = [
  "#FFFF",
  "#969696",
  "#000",
  "#0315FF",
  "#DC0647",
  "#FFF56A",
  "#F26E51",
  "#9A8777",
  "#5B862A",
  "#8662A9",
];
let currentIndex = 0;


function changeBackgroundColor() {
  document.body.style.backgroundColor = collection[currentIndex];
  currentIndex = (currentIndex + 1) % collection.length;
}

// Add a click event listener to the button
var colorButton = document.querySelector(".color1");
colorButton.addEventListener("click", changeBackgroundColor);

// Add a click event listener to the button
let colorButtons = document.querySelector(".color2");
colorButtons.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[1];
});

let colorButtons1 = document.querySelector(".color3");
colorButtons1.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[2];
});

var colorButtons2 = document.querySelector(".color4");
colorButtons1.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[3];
});

var colorButtons3 = document.querySelector(".color5");
colorButtons1.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[4];
});

var colorButtons4 = document.querySelector(".color6");
colorButtons1.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[5];
});

var colorButtons5 = document.querySelector(".color7");
colorButtons5.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[6];
});

var colorButtons6 = document.querySelector(".color8");
colorButtons6.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[7];
});

var colorButtons7 = document.querySelector(".color9");
colorButtons7.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[8];
});

var colorButtons8 = document.querySelector(".color10");
colorButtons8.addEventListener("click", () => {
  document.body.style.backgroundColor = collection[9];
});

const theBtn = document.querySelector("#shop-btn");
const theItem = document.querySelector(".menumenu");



const pageBtn = document.querySelector(".cn-dropdown-item");
const pageItem = document.querySelector(".dropdown");

pageBtn.addEventListener("mouseover", () => {
  pageItem.classList.toggle("custom_slideInUp_btn_1");
});
