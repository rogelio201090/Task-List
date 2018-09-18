const ul = document.querySelector(".collection");

const items = ul.getElementsByClassName("collection-item");
console.log(items);
//console.log(items[0]);

items[0].style.color = "blue";
items[0].style.background = "grey";
items[0].innerText = "blue element";

let itemArray = Array.from(items);

console.log(itemArray);

itemArray.forEach(function(item, index) {
  item.innerText = `Element # ${index}`;
  item.style.background = `rgb(${(index + 5) * 30},${10 * index},${index * 20 -
    2})`;
  item.style.color = `rgb(${10 * index},${(index + 5) * 30},${index * 20 - 2})`;
});
