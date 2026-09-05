import { EventEmitter } from "events";

export default class Theme extends EventEmitter{
  constructor() {
    super();
    
    this.theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";

    this.toggleButton = document.querySelector(".toggle-button");
    this.toggleCircle = document.querySelector(".toggle-circle");

    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${this.theme}-theme`);
    this.toggleCircle.classList.toggle("slide", this.theme === "dark");

    this.setEventListener();

    this.emit("switch", this.theme);
  }

  setEventListener() {
    this.toggleButton.addEventListener("click", () => {
      this.toggleCircle.classList.toggle("slide");
      this.theme = this.theme === "light" ? "dark" : "light";
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
      this.emit("switch", this.theme);
    })
  }
}