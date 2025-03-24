import { Grid } from "./grid.js";


const plusBtn = document.querySelector(".plus-btn");
const rowBtn = document.querySelector(".add-row-btn");
const mainDropdownMenu = document.querySelector(".mainDropdown-menu");
const gridContainer = document.querySelector(".grid-container");
let grid = null;


let itemsArr = ["Task", "Deadline", "Priority", "Status", "Time", "Checkbox"];

document.addEventListener("DOMContentLoaded", function () {
  mainDropdownMenu.style.display = "none";
  grid = new Grid();
  gridContainer.appendChild(grid.element);

  plusBtn.addEventListener("click", function () {
    // Toggle the visibility of the dropdown menu
    mainDropdownMenu.style.display =
      mainDropdownMenu.style.display === "block" ? "none" : "block";
  });

  itemsArr.forEach((item) => {
    const dropdown = new mainDropdown(item);
    dropdown.createDropdown();
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".mainDropdown-menu") &&
      !event.target.closest(".plus-btn")
    ) {
      mainDropdownMenu.style.display = "none";
    }
  });

  rowBtn.addEventListener("click", () => {
    grid.addRow();
  });
});

class mainDropdown {
  constructor(item) {
    this.item = item;
  }

  createDropdown() {
    const itemCell = document.createElement("div");
    itemCell.textContent = this.item;
    itemCell.classList = "item-cell";
    mainDropdownMenu.appendChild(itemCell);
    itemCell.addEventListener("click", () => {
      grid.addColumn(this.item);
    });
  }
}
