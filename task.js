export class Task {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("task-element");
    this.textInput = null;
    this.createInput();
  }

  createInput() {
    this.element.innerHTML = '';
    this.textInput = document.createElement("input");
    this.textInput.classList.add("input");

    this.textInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const inputValue = this.textInput.value.trim();
        if (inputValue) {
          this.createTask();
        } else {
          alert("No text available!"); // Alert if input is empty
        }
      }
    });
    this.element.appendChild(this.textInput);
  }

  createTask() {
    this.element.innerHTML = '';
    this.task = document.createElement("div");
    this.task.textContent = this.textInput.value.trim();
    this.task.addEventListener('click', () => {
        const inputValue = this.textInput.value;
        this.createInput();
        this.textInput.value = inputValue;
    })
    this.element.appendChild(this.task);
  }
}
