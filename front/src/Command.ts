import { Config } from "./Config";
import { querySelector } from "./utils";

export class Command {
  callback: (newConfig: Config) => void = () => {};

  constructor(private config: Config) {
    this.applyConfig();
    this.listenEvents();
  }

  applyConfig() {
    this.setInput("sampleNbr");
    this.setInput("multiplicationFactor");
  }

  listenEvents() {
    // pour chaque input
    // ecouter tout changement de l'input
    // modifier le chiffre au dessus
    // jouer la fonction demandee par onUpdate
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
