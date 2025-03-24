export class DateInput {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('date-input');

        this.container = document.createElement('input');
        this.container.type ='date';
        this.element.appendChild(this.container);
    }
}