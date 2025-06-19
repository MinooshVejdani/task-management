import { Checkbox } from './checkbox.js';
import { Dropdown } from './dropdown.js';
import { DateInput } from './dateInput.js';
import { Time } from './time.js';
import { Task } from './task.js';
import { Priority } from './priority.js';

const columnClassTitles = {Task: 'Task', Time: 'Time Estimation', Priority: 'Priority' , Status: 'Status', Deadline: 'Deadline', Checkbox: "Checkbox"};
let dropdownInstances = [];
export class GridCell {
    constructor(type, color, borderColor, borderWidth) {
        this.type = type;
        this.element = document.createElement('div');
        this.setColor(color);
        this.setBorderColor(borderColor);
        this.setBorderWidth(borderWidth);
        this.element.style.borderStyle = 'solid';
        this.element.classList.add('grid-cell');

        if (this.type === 'Checkbox'){
            this.dynamicInstance = new Checkbox();
        } else if (this.type === 'Status'){
            this.dynamicInstance = new Dropdown();
            dropdownInstances.push(this.dynamicInstance);
            //***UPDATE new dropdowns with the items added or removed
        } else if(this.type === 'Deadline') {
            this.dynamicInstance = new DateInput();
        } else if(this.type === 'Time') {
            this.dynamicInstance = new Time();
        } else if (this.type === 'Task') {
            this.dynamicInstance = new Task();
        }else if (this.type === 'Priority'){
            this.dynamicInstance = new Priority();
        } else {
            this.dynamicInstance = null;
            console.log('This type has not been defined.');
        }
        if (this.dynamicInstance && this.dynamicInstance.element) {
            this.element.appendChild(this.dynamicInstance.element);
        }
    }

    setColor(color) {
        this.color = color;
        this.element.style.background = this.color;
    }

    setBorderColor(color) {
        this.borderColor = color;
        this.element.style.borderBottomColor = this.borderColor;
    }

    setBorderWidth(width) {
        this.borderWidth = width;
        this.element.style.borderBottomWidth = `${this.borderWidth}px`;
    }
}

