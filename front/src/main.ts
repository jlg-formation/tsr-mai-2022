import "./style.css";
import { getAngle, getCoordinatesOnCircle } from "./utils";

console.log("coucou");

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
