
export class Status {
  constructor(name = 'Status', dropdownInstance) {
    this.name = name;
    this.color = null;

    this.dropdownInstance = dropdownInstance;
    this.itemContainer = document.createElement("div");
    this.itemContainer.className = "item-container";
    this.item = document.createElement('div');
    this.item.textContent = this.name;
    this.item.className = "status-item";
    this.itemContainer.appendChild(this.item);

    this.removeBtn = document.createElement('button');
   
    this.removeBtn.className = "remove-button";
    this.itemContainer.appendChild(this.removeBtn);
    this.removeBtn.addEventListener('click', () => {
      this.deleteSelf();
    });

    this.itemContainer.addEventListener("click", (event) => {
      if(!event.target.matches(".remove-button")){
        this.setDropdownButtonText(this.name);
        dropdownInstance.closeMenu();
      }
    });

    this.itemContainer.addEventListener('myCustomEvent', () => {
      console.log('custom event triggered!');
    });

    this.itemContainer.dispatchEvent(myEvent);

    this.itemContainer.addEventListener('mouseenter', () => {
      this.removeBtn.style.display = 'block';
    });
    
    this.itemContainer.addEventListener('mouseout', (event) => {
      // Check if the mouse is leaving the container entirely
      if (!this.itemContainer.contains(event.relatedTarget)) {
        this.removeBtn.style.display = 'none';
      }
    });
  }

  setColor(color) {
    this.color = color;
    this.item.style.backgroundColor = color;
    this.item.style.borderColor = color.slice(0, -2);
  }

  setDropdownButtonText(name) {
    this.dropdownInstance.dropdownButton.textContent = name;
    this.dropdownInstance.dropdownButton.style.backgroundColor = this.color;
  }

  deleteSelf() {
    this.dropdownInstance.removeStatus(this);
    if(this.dropdownInstance.dropdownButton.textContent === this.item.textContent) {
      this.dropdownInstance.dropdownButton.textContent = 'Status';
      this.dropdownInstance.dropdownButton.style.backgroundColor = '#f5f5f5';
    }
  }
}

const myEvent = new Event('mycustomEvent')
