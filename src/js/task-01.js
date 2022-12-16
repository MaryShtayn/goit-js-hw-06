const listEl = document.querySelectorAll(".item");

console.log(listEl.length);
// console.log(listEl);

listEl.forEach((item, index) => {
  const category = item.firstElementChild;
  console.log("Category: ", category.textContent);
  const elements = item.lastElementChild;
  console.log("Elements: ", elements.children.length);
});
