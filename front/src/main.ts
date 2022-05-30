import "./style.css";

import { cx0, cy0, r0 } from "./Constants";
import { Point } from "./interfaces/Point";

console.log("coucou");

const getAngle = (index: number, total: number) => {
  return (index * (2 * Math.PI)) / total;
};

const getCoordinatesOnCircle = (angle: number): Point => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};

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

drawCircles(12);
