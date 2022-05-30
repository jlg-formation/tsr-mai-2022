import { Command } from "./Command";
import "./style.css";
import { VisualMultiplicator } from "./VisualMultiplicator";

const main = () => {
  const visualMultiplicator = new VisualMultiplicator();
  visualMultiplicator.setConfig({
    sampleNbr: 34,
    multiplicationFactor: 12,
  });
  visualMultiplicator.draw();

  const command = new Command({
    sampleNbr: 10,
    multiplicationFactor: 2,
  });
  command.onUpdate((config) => {
    visualMultiplicator.setConfig(config);
    visualMultiplicator.draw();
  });
};

main();
