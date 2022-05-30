import { Command } from "./Command";
import "./style.css";
import { VisualMultiplicator } from "./VisualMultiplicator";

const main = () => {
  const initialConfig = {
    sampleNbr: 10,
    multiplicationFactor: 2,
  };
  const visualMultiplicator = new VisualMultiplicator();
  visualMultiplicator.setConfig(initialConfig);
  visualMultiplicator.draw();

  const command = new Command(initialConfig);
  command.onUpdate((config) => {
    visualMultiplicator.setConfig(config);
    visualMultiplicator.draw();
  });
};

main();
