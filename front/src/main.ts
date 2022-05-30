import { Point } from "./interfaces/Point";
import "./style.css";
import { getAngle, getCoordinatesOnCircle } from "./utils";

console.log("coucou");

const sampleNbr = 71;
const multiplicationFactor = 36;

const drawCircles = (n: number) => {
  const elt = document.querySelector("svg g.circles");

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

drawCircles(sampleNbr);

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
  const elt = document.querySelector("svg g.lines");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");

  elt.appendChild(line);
};

drawLines(sampleNbr, multiplicationFactor);
