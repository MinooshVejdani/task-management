import { GridCell } from "./gridCell.js";
const defaultRowCounts = 5;
const columnClassTitles = {
  Task: "Task",
  Time: "Time",
  Priority: "Priority",
  Status: "Status",
  Deadline: "Deadline",
  Checkbox: "Checkbox",
};
const defaultColumnClassesName = [
  "Task",
  "Status",
  "Deadline",
  "Time",
  "Priority",
  "Checkbox",
];
let columnsTypeList = [];
let gridData = [];

export class Grid {
  constructor() {
    this.rowsCount = defaultRowCounts;
    this.element = document.createElement("div");
    this.element.classList.add("grid");
    this.setDefaultGrid();
  }
  //setting the default grid in the beginning
  setDefaultGrid() {
    for (let i = 0; i < defaultColumnClassesName.length; i++) {
      this.addColumn(defaultColumnClassesName[i]);
    }
  }

  //store columnType in gridData
  addColumn(type) {
    const id = `id-${
      Date.now().toString(36) + Math.random().toString(36).substring(2, 5)
    }`;
    const columnElement = document.createElement("div");
    columnElement.id = id;
    columnElement.classList.add("grid-column");
    // It is only about the title
    const titleCell = document.createElement("div");
    titleCell.textContent = columnClassTitles[type];
    titleCell.classList.add("title-text");
    columnElement.appendChild(titleCell);
    this.createRemoveButton(titleCell, columnElement, id);
  
    
    for (let i = 0; i < this.rowsCount; i++) {
        const gridCell = new GridCell(type, "#1f2120", "#ddd", 1);
     
      columnElement.appendChild(gridCell.element);
    }
    this.element.appendChild(columnElement);
    columnsTypeList.push({ type: type, id: id });

    gridData.push([]);
    console.log(id);
  }

  //store rowsCount in gridData
  addRow() {
    const columnsElement = document.querySelectorAll(".grid-column");
    console.log(columnsElement);
    columnsElement.forEach((columnElement, index) => {
      const gridCell = new GridCell(
        columnsTypeList[index].type,
        "#1f2120",
        "#ddd",
        1
      );
      columnElement.appendChild(gridCell.element);
    });
    this.rowsCount++;
  }

  // Create the remove button for deleting the column
  createRemoveButton(titleCell, columnElement, id) {
    const removeColumnBtn = document.createElement("button");
    removeColumnBtn.textContent = "-";
    removeColumnBtn.classList.add("remove-column-btn");
    titleCell.appendChild(removeColumnBtn);

    // Add event listener to the remove button
    removeColumnBtn.addEventListener("click", () => {
      this.deleteColumn(columnElement, id);
    });
  }

  // Function to delete a column
  deleteColumn(columnElement, id) {
    // Removes the column element from the grid
    columnElement.remove();
    columnsTypeList = columnsTypeList.filter((column) => column.id !== id);
    console.log(columnsTypeList);
  }

}
