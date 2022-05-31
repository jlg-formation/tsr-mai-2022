import { Config } from "./Config";
import { Point } from "./interfaces/Point";
import { getAngle, getCoordinatesOnCircle } from "./utils";

export class VisualMultiplicator {
  config: Config = {
    multiplicationFactor: 2,
    sampleNbr: 10,
  };

  draw() {
    drawCircles(this.config.sampleNbr);
    drawLines(this.config.sampleNbr, this.config.multiplicationFactor);
  }

  setConfig(config: Config) {
    this.config = config;
  }
}

const drawCircles = (n: number) => {
  const elt = document.querySelector("svg g.circles") as HTMLElement;

  // boucle de 1 a n
  for (let i = 0; i < n; i++) {
    const angle = getAngle(i, n);
    const c = getCoordinatesOnCircle(angle);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttributeNS(null, "cx", c.x + "");
    circle.setAttributeNS(null, "cy", c.y + "");
    circle.setAttributeNS(null, "r", "1");
    // ajouter le petit cercle au DOM
    elt.appendChild(circle);
  }
};

const drawLines = (n: number, multiplicationFactor: number) => {
  const elt = document.querySelector("svg g.lines");

  // boucle de 1 a n
  for (let i = 0; i < n; i++) {
    const angle1 = getAngle(i, n);
    const angle2 = getAngle(i * multiplicationFactor, n);
    const p1 = getCoordinatesOnCircle(angle1);
    const p2 = getCoordinatesOnCircle(angle2);
    drawLine(p1, p2);
  }
};

const drawLine = (p1: Point, p2: Point) => {
  const elt = document.querySelector("svg g.lines") as HTMLElement;

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");

  elt.appendChild(line);
};
