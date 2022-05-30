import "./style.css";
import { VisualMultiplicator } from "./VisualMultiplicator";

const main = () => {
  const visualMultiplicator = new VisualMultiplicator();
  visualMultiplicator.setConfig({
    sampleNbr: 34,
    multiplicationFactor: 12,
  });
  visualMultiplicator.draw();
};

main();
