import { Config } from "./Config";
import { querySelector } from "./utils";

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
    const elt = querySelector(
      `div.command label.${key} span`,
      HTMLElement
    ) as HTMLElement;
    elt.innerHTML = this.config[key] + "";
    const input = querySelector(
      `div.command label.${key} input`,
      HTMLInputElement
    ) as HTMLInputElement;
    input.value = this.config[key] + "";
  }
}
