import { cx0, cy0, r0 } from "./Constants";

import { Point } from "./interfaces/Point";

export const getAngle = (index: number, total: number) => {
  return (index * (2 * Math.PI)) / total;
};

export const getCoordinatesOnCircle = (angle: number): Point => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};
