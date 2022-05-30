console.log("coucou");

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const drawCircles = (n) => {
  // recuperer l'elt svg g.circles
  const elt = document.querySelector("svg g.circles");

  // boucle de 1 a n
  for (let i = 0; i < n; i++) {
    const angle = (i * (2 * Math.PI)) / n;

    const cx = cx0 + r0 * Math.cos(angle);
    const cy = cy0 + r0 * Math.sin(angle);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttributeNS(null, "cx", cx + "");
    circle.setAttributeNS(null, "cy", cy + "");
    circle.setAttributeNS(null, "r", "1");
    // ajouter le petit cercle au DOM
    elt.appendChild(circle);
  }
};

drawCircles(10);
