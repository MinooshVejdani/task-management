export class Star {
    constructor(isOn = false) {
        this.element = document.createElement('button');
        this.element.classList.add('star-container');
        
        this.icon = document.createElement('i');
        this.icon.className = 'fa-regular fa-star';

        this.element.appendChild(this.icon);

        // this.priority = priority;
        this.id = 0;
        this.isOn = isOn;
    }
    
    setOn(isOn) {
        this.isOn = isOn;
        this.updateStarIcon();
    }

    updateStarIcon() {
        if (this.isOn) {
            this.icon.className = 'fa-solid fa-star';
        } else {
            this.icon.className = 'fa-regular fa-star';
        }
    }

    toggle() {
        this.isOn = !this.isOn;
        this.updateStarIcon();
    }
}