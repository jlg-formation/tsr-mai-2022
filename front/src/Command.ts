import { Config } from "./Config";

export class Command {
  constructor(private config: Config) {}

  onUpdate(callback: (newConfig: Config) => void) {
    console.log("onUpdate");
  }
}
