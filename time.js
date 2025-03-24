export class Time {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('time-container');

        this.hoursInput = document.createElement('input');
        this.hoursInput.type = 'number';
        this.hoursInput.min = '0';
        this.hoursInput.placeholder = 'HH';
        this.hoursInput.classList.add('no-arrows', 'time-input');
        
      const separator = document.createElement('span');
        separator.textContent = ':';
        separator.classList.add('time-separator');
        
        this.minutesInput = document.createElement('input');
        this.minutesInput.type ='number';
        this.minutesInput.min = '0';
        this.minutesInput.max = '59';
        this.minutesInput.placeholder = 'MM';
        this.minutesInput.classList.add('no-arrows', 'time-input');

        this.element.appendChild(this.hoursInput);
        this.element.appendChild(separator);
        this.element.appendChild(this.minutesInput);
    }
}

