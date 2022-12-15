const listEl = document.querySelectorAll(".item");

console.log(listEl.length);
console.log(listEl);

listEl.forEach((item, index) => {
  const category = item.querySelector("h2");
  console.log("Category: ", category.textContent);
  const elements = item.querySelectorAll("li");
  console.log("Elements: ", elements.length);
});
