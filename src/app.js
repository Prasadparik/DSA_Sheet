//  Json Data

import data from "./data.json" assert { type: "json" };
// console.log("data::", data.DataSheet);
let List = data.DataSheet;
// =========================================================

let ListItems = document.getElementById("list");

List.forEach((element, i) => {
  // Bg color
  let bgColor = "bg-success-subtle";
  if (List[i].level == "Medium") {
    bgColor = "bg-warning-subtle";
  } else if (List[i].level == "Hard") {
    bgColor = "bg-danger-subtle";
  }

  let newListItem = document.createElement("card");
  newListItem.className = "card m-1";
  newListItem.innerHTML = `

<div class="card p-4">
<a href="${List[i].url}"
target="_blank"
rel="noopener noreferrer"
>
<div class="row">
  <div class="col-sm-1 fs-5 fw-bold text-center">
	${List[i].no}
  </div>
  <div class="col-sm-7 fs-5 fw-semibold">
  ${List[i].questionTitle}
  </div>
  <div class="col-sm-2  fs-5 fw-medium text-center">
  ${List[i].tag}
  </div>
  <div
	class="col-sm-2 ${bgColor} level fs-5 fw-medium text-center"
  >
  ${List[i].level}
  </div>
</div>
</a>
</div>

`;

  // console.log(newListItem);

  ListItems.appendChild(newListItem);
});

//  Filter item ======================================

let filter = document.getElementById("filter");
let itemList = document.getElementById("list");

//  filter event
filter.addEventListener("keyup", filterItems);

//  Filter funct ========================

function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // Get lis
  var items = itemList.getElementsByTagName("card");
  console.log("=> ", items[0].innerText);

  // convert to array
  Array.from(items).forEach(function (item) {
    var itemName = item.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
