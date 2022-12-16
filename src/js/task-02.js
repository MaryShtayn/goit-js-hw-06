const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");
const listItemEl = document.createElement("li");

const ingredientsList = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

listEl.innerHTML = ingredientsList;

console.log(listEl);
