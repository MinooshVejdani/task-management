
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
      console.log('we want to delete sth');
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

  getSharperColor(color) {
    // Convert #RRGGBB to RGB values
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Adjust the RGB values to make the color sharper
    const factor = 2; // Darken by 20%
    const newR = Math.max(0, Math.min(255, r * factor));
    const newG = Math.max(0, Math.min(255, g * factor));
    const newB = Math.max(0, Math.min(255, b * factor));

    // Convert back to hex
    return (
        "#" +
        [newR, newG, newB]
            .map((channel) => Math.round(channel).toString(16).padStart(2, "0"))
            .join("")
    );
}

  setColor(color) {
    this.color = color;
    this.item.style.backgroundColor = color;

    const borderColor = color.slice(0, -2);
    this.item.style.borderColor = color.slice(0, -2);

    this.textColor = this.getSharperColor(borderColor);
    this.item.style.color = this.textColor;
  }

  setDropdownButtonText(name) {
    this.dropdownInstance.dropdownButton.textContent = name;
    this.dropdownInstance.dropdownButton.style.color = this.textColor;
    this.dropdownInstance.dropdownButton.style.backgroundColor = this.color;
  }

  deleteSelf() {
    this.dropdownInstance.removeStatus(this);
    // test
    console.log('Dropdown Button Text:', this.dropdownInstance.dropdownButton.textContent);
    console.log('Item Text:', this.item.textContent);
  }
}

const myEvent = new Event('mycustomEvent')
