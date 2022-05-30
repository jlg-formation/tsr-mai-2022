import { Config } from "./Config";

export class Command {
  constructor(private config: Config) {
    this.applyConfig();
  }

  applyConfig() {
    this.setInput("sampleNbr");
    this.setInput("multiplicationFactor");
  }

  onUpdate(callback: (newConfig: Config) => void) {
    console.log("onUpdate");
  }

  setInput(key: keyof Config) {
    // recuperer le text html (la ou il y a le nombre)
    const elt = document.querySelector(`div.command label.${key} span`);
    elt.innerHTML = this.config[key] + "";
    const input = document.querySelector(
      `div.command label.${key} input`
    ) as HTMLInputElement;
    input.value = this.config[key] + "";
  }
}
