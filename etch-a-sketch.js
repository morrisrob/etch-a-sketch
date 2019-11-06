var numOfCols = 30;
var numOfRows = 30;
var totalGridWidth = 600;
var totalGridHeight = 600;
var objectHeight = totalGridHeight / numOfCols;
var objectWidth = totalGridWidth / numOfRows;
console.log(objectHeight);
console.log(objectWidth);

document.documentElement.style.setProperty(
  "--objectHeight",
  objectHeight + "px"
);
document.documentElement.style.setProperty("--objectWidth", objectWidth + "px");
document.documentElement.style.setProperty("--rowNum", numOfRows);
document.documentElement.style.setProperty("--colNum", numOfCols);
document.documentElement.style.setProperty(
  "--gridHeight",
  totalGridHeight + "px"
);
document.documentElement.style.setProperty(
  "--gridWidth",
  totalGridWidth + "px"
);

var resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", function() {
  location.reload();
  alert("yah");
});

var header = document.createElement("div");
document.body.appendChild(header);
header.id = "gridHeader";

header.innerText = "Etch-a-Sketch";
header.className = "gridHeader";

var etchBorder = document.createElement("div");
document.body.appendChild(etchBorder);
etchBorder.id = "etchBorder";

var gridContainer = document.createElement("div");
document.getElementById("etchBorder").appendChild(gridContainer);
gridContainer.id = "gridContainer";
gridContainer.className = "gridContainer";
document.getElementById("gridContainer").style.height = totalGridHeight;
document.getElementById("gridContainer").style.width = totalGridWidth;

var i;
for (i = 0; i < numOfRows; ++i) {
  var row = gridContainer.appendChild(document.createElement("div"));
  row.className = "row";
  row.id = "row" + i;
  for (var k = 0; k < numOfCols; ++k) {
    var box = row.appendChild(document.createElement("div"));
    box.className = "box";
    box.id = "r" + i + "c" + k;
    //box.innerHTML = box.id
  }
}

function changeClass(event) {
  var highlightedCell = event.target.id;
  console.log(highlightedCell);
  document.getElementById(highlightedCell).className = "gridMouse";
  console.log(event.target.className);
  console.log(event.target.tagName);
}

var inputs = document.getElementsByClassName("box");
for (var k = 0; i < inputs.length; k++) {
  inputs[k].addEventListener("mouseover", changeClass, false);
}

function resetGrid() {
  location.reload();
}

console.log(--objectWidth);
