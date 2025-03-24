import { Star } from "./star.js";

export class Priority {
  constructor() {
    this.numStar = 3;
    this.starsArray = [];
    this.element = document.createElement("div");
    this.element.classList.add("priority-container");

    for (let i = 0; i < this.numStar; i++) {
      const star = new Star();
      this.element.appendChild(star.element);
      star.id = i;
      this.starsArray.push(star);

      star.element.addEventListener("click", () => {
        const shouldTurnOff =
          star.isOn &&
          (!this.starsArray[star.id + 1] || !this.starsArray[star.id + 1].isOn);

        this.starsArray.forEach((s) =>
          s.setOn(!shouldTurnOff && s.id <= star.id)
        );
      });
    }
  }
}
