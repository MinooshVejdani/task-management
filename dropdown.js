import { Status } from "./status.js";
const EventBus = new EventTarget();
const defaultOptions = ["Not Started", "In Progress", "Done"];
let statusArray = [];
const colors = [
  "#FAE7A47a",
  "#EE9B007a",
  "#0A93967a",
  "#AE20127a",
  "#94D2BD7a",
  "#F7FAB67a",
  "#FBCEC37a",
  "#B3FBC07a",
  "#BECFFF7a",
  "#AFFBF67a",
  "#FFCFE17a",
  "#B6FFD77a",
];
//function to notifly all dropdowns
function updateDropdowns(action, status) {
  EventBus.dispatchEvent(
    new CustomEvent("statusUpdate", {
      detail: { action, status },
    })
  );
}

export class Dropdown {
  constructor() {
    this.dropdownButton = null;
    this.dropdownContainer = null;
    this.dropdownMenu = null;
    this.addNewButton = null;
    this.newInput = null;
    this.IsMenuOpen = false;
    this.createDropdown();
    EventBus.addEventListener("statusUpdate", (event) => {
      const { action, status } = event.detail;
      this.displayStatuses(action, status)
    });
  }

  createDropdown() {
    // update status array to have defult options
    defaultOptions.forEach((element) => {
      if (!statusArray.includes(element)) {
        statusArray.push(element);
      }
    });

    //create element div
    this.element = document.createElement("div");
    this.element.className = "status-container";

    // Create dropdown button
    this.dropdownButton = document.createElement("button");
    this.dropdownButton.className = "dropdown-button";
    this.dropdownButton.textContent = "None";

    // Create dropdown container
    this.dropdownContainer = document.createElement("div");
    this.dropdownContainer.className = "dropdown-container";
    this.dropdownContainer.style.display = "none";

    // Create dropdown menu
    this.dropdownMenu = document.createElement("div");
    this.dropdownMenu.className = "dropdown-menu";

    // Create addNew Button
    this.addNewButton = document.createElement("div");
    this.addNewButton.textContent = "+ Add New";
    this.addNewButton.className = "dropdown-add-new-button";
    this.displayStatuses();

    // Append button and menu to the body (or a specific container)
    this.element.appendChild(this.dropdownButton);
    this.element.appendChild(this.dropdownContainer);
    this.dropdownContainer.appendChild(this.dropdownMenu);
    this.dropdownContainer.appendChild(this.addNewButton);

    // Initialize event listeners
    this.initEventListeners();
  }

  initEventListeners() {
    // Toggle dropdown menu on button click
    this.dropdownButton.addEventListener("click", () => {
      this.toggleMenu();
    });

    this.addNewButton.addEventListener("click", () => this.showInput(true));

    // Close dropdown when clicking outside
    window.addEventListener("click", (event) => {
      if (
        !event.target.matches(".dropdown-button") &&
        !event.target.matches(".dropdown-menu") &&
        !event.target.matches(".dropdown-menu *") && // not any element inside the dropdown menu
        !event.target.matches(".dropdown-add-new-button")
      ) {
        if (this.IsMenuOpen){
          this.closeMenu();
        }
      }
      if(event.target !== this.dropdownButton && !event.target.matches(".dropdown-add-new-button")) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.IsMenuOpen = !this.IsMenuOpen;
    this.dropdownContainer.style.display = this.IsMenuOpen?  "block" : "none";
  }

  closeMenu() {
    this.IsMenuOpen = false;
    this.dropdownContainer.style.display = "none";
    if (this.newInput){
      this.showInput(false);
    }
  }

  showInput(showInput) {
    if(showInput) {
      this.addNewButton.remove();
      this.newInput = document.createElement('input');
      this.newInput.className = "new-input";
      
      this.newInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && this.newInput.value) {
          if (this.statusExists()) {
            alert("This status exists in the list!");
          } else {
            const newInputValue = this.newInput.value.trim();
            this.addStatus(newInputValue);
            this.showInput(false);
          }
        }
      });
      this.dropdownMenu.appendChild(this.newInput);
      this.newInput.focus();
    } else {
      this.newInput.remove();
      this.newInput = null;
      this.addNewButton = document.createElement('div');
      this.addNewButton.textContent = "+ Add new";
      this.addNewButton.className = "dropdown-add-new-button";
      this.addNewButton.addEventListener("click", () => this.showInput(true));
      this.dropdownContainer.appendChild(this.addNewButton);
    }
  }

  statusExists() {
    for (let i = 0; i < statusArray.length; i++) {
      if (this.newInput.value.toLowerCase() === statusArray[i].toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  addStatus(statusName) {
    if (!statusArray.includes(statusName)) {
      statusArray.push(statusName);
      updateDropdowns("add", statusName);
    }
  }

  removeStatus(status) {
    statusArray = statusArray.filter((s) => s !== status.name);
    updateDropdowns("remove", status);
  }

  displayStatuses(action, status) {
    this.dropdownMenu.innerHTML = "";
    statusArray.forEach((status, index) => {
      const newStatus = new Status(status, this);
      this.dropdownMenu.appendChild(newStatus.itemContainer);
      let nextColor = colors[index % colors.length];
      newStatus.setColor(nextColor);
    });

    if(action === "remove" && this.dropdownButton.textContent === status.item.textContent){
      this.dropdownButton.textContent = 'None';
      this.dropdownButton.style.backgroundColor = '#f5f5f5';
    }
  }
}
