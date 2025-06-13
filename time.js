export class Time {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('time'); // Container class

    // --- Hour Select ---
    const hourSelect = document.createElement('select');
    hourSelect.classList.add('time-select');
    hourSelect.required = true;

    const hourPlaceholder = document.createElement('option');
    hourPlaceholder.textContent = 'HH';
    hourPlaceholder.disabled = true;
    hourPlaceholder.selected = true;
    hourPlaceholder.value = '';
    hourSelect.appendChild(hourPlaceholder);

    for (let i = 0; i < 24; i++) {
      const option = document.createElement('option');
      option.value = i.toString().padStart(2, '0');
      option.textContent = i.toString().padStart(2, '0');
      hourSelect.appendChild(option);
    }

    // --- Seperator ---
    const separator = document.createElement("span");
    separator.textContent = ":";
    separator.classList.add("time-separator");

    // --- Minute Select ---
    const minuteSelect = document.createElement('select');
    minuteSelect.classList.add('time-select');
    minuteSelect.required = true;

    const minutePlaceholder = document.createElement('option');
    minutePlaceholder.textContent = 'MM';
    minutePlaceholder.disabled = true;
    minutePlaceholder.selected = true;
    minutePlaceholder.value = '';
    minuteSelect.appendChild(minutePlaceholder);

    for (let i = 0; i < 60; i += 5) {
      const option = document.createElement('option');
      option.value = i.toString().padStart(2, '0');
      option.textContent = i.toString().padStart(2, '0');
      minuteSelect.appendChild(option);
    }

    // Save to instance
    this.hourSelect = hourSelect;
    this.minuteSelect = minuteSelect;

    // Append to main element
    this.element.appendChild(hourSelect);
    this.element.appendChild(separator);
    // this.element.appendChild(document.createTextNode(" : "));
    this.element.appendChild(minuteSelect);
  }

  getSelectedTime() {
  const hour = this.element.querySelector(".hour-select").value;
  const minute = this.element.querySelector(".minute-select").value;
  return `${hour}:${minute}`;
}
}










// export class Time {
//   constructor() {
//     this.element = document.createElement("div");
//     this.element.classList.add("time-container");

//     const defaultHour = document.createElement('option');
//     defaultHour.textContent = "HH";
//     defaultHour.disabled = true;
//     defaultHour.selected = true;
//     hourSelect.appendChild(defaultHour);

//     const defaultMinute = document.createElement('option');
//     defaultMinute.tabIndex = "MM";
//     defaultMinute.disabled = true;
//     defaultMinute.selected = true;
//     minuteSelect.appendChild(defaultMinute);

//     const hourSelect = document.createElement("select");
//     hourSelect.classList.add("time-select");
//     for (let i = 0; i < 24; i++) {
//       const option = document.createElement("option");
//       option.value = i.toString().padStart(2, "0");
//       option.textContent = i.toString().padStart(2, "0");
//       hourSelect.appendChild(option);
//     }
//     this.hourSelect = hourSelect;

//     const separator = document.createElement("span");
//     separator.textContent = ":";
//     separator.classList.add("time-separator");

//     const minuteSelect = document.createElement("select");
//     minuteSelect.classList.add("time-select");
//     for (let i = 0; i < 60; i++) {
//       const option = document.createElement("option");
//       option.value = i.toString().padStart(2, "0");
//       option.textContent = i.toString().padStart(2, "0");
//       minuteSelect.appendChild(option);
//     }
//     this.minuteSelect = minuteSelect;

//     this.element.appendChild(this.hourSelect);
//     this.element.appendChild(separator);
//     this.element.appendChild(document.createTextNode(" : "));
//     this.element.appendChild(this.minuteSelect);
//   }

//   getSelectedTime() {
//     const hour = this.element.querySelector(".hour-select").value;
//     const minute = this.element.querySelector(".minute-select").value;
//     return `${hour}:${minute}`;
//   }
// }


