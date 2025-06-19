

export class Checkbox {
constructor(checked = false, color = 'black') {
    this.element = document.createElement('div');
    this.element.classList.add('checkbox');
    this.color = color;
    this.checked = checked;

    // Initialize the checkbox state
    this.updateCheckboxElement();

    // Add event listener
    this.element.addEventListener('click', () => {
        this.toggle();
        this.updateCheckboxElement();
    });
}
    toggle() {
        this.checked = !this.checked;
    }

    isChecked() {
        return this.checked;
    }

    updateCheckboxElement() {
        // Update the DOM element based on the checked state
        if (this.checked) {
            this.element.classList.add('checked');
            this.element.classList.remove('unchecked');
        } else {
            this.element.classList.add('unchecked');
            this.element.classList.remove('checked');
        }
    }
}