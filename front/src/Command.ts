import { Config } from "./Config";
import { querySelector } from "./utils";

export class Command {
  callback: (newConfig: Config) => void = () => {};

  isPlaying = false;
  interval: number | undefined = undefined;

  constructor(private config: Config) {
    this.applyConfig();
    this.listenEvents();
  }

  applyConfig() {
    this.setInput("sampleNbr");
    this.setInput("multiplicationFactor");
  }

  listenEvents() {
    const inputs = document.querySelectorAll("div.command input");
    for (const input of inputs) {
      console.log("input: ", input);
      input.addEventListener("input", (event) => {
        console.log("event: ", event);
        const input = event.target;
        if (!(input instanceof HTMLInputElement)) {
          throw new Error("no input found");
        }
        console.log("input.value: ", input.value);
        const name = input.parentElement?.className;
        if (typeof name !== "string") {
          throw new Error("no name found");
        }
        console.log("name: ", name);
        if (!["sampleNbr", "multiplicationFactor"].includes(name)) {
          throw new Error("name is not a config key");
        }
        this.config[name as keyof Config] = +input.value;
        this.applyConfig();
        this.callback(this.config);
      });
    }

    const playButton = querySelector("div.command button", HTMLButtonElement);
    playButton.addEventListener("click", (event) => {
      console.log("event: ", event);
      this.isPlaying = !this.isPlaying;
      this.managePlayer();
    });
  }
  managePlayer() {
    const playButton = querySelector("div.command button", HTMLButtonElement);
    if (this.isPlaying) {
      // affiche stop sur le bouton
      playButton.innerHTML = "Stop";
      // toutes les secondes ajouter 1 a multiplicationFactor
      this.interval = window.setInterval(() => {
        console.log("tick");
        this.config.multiplicationFactor++;
        this.config.multiplicationFactor =
          this.config.multiplicationFactor > 100
            ? 1
            : this.config.multiplicationFactor;
        this.applyConfig();
        this.callback(this.config);
      }, 1000);
      console.log("this.interval: ", this.interval);

      return;
    }
    // stopper l'interval
    playButton.innerHTML = "Play";
    if (this.interval !== undefined) {
      window.clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  onUpdate(callback: (newConfig: Config) => void) {
    console.log("onUpdate");
    this.callback = callback;
  }

  setInput(key: keyof Config) {
    const elt = querySelector(`div.command label.${key} span`, HTMLElement);
    elt.innerHTML = this.config[key] + "";
    const input = querySelector(
      `div.command label.${key} input`,
      HTMLInputElement
    );
    input.value = this.config[key] + "";
  }
}
