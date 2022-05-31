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

export const querySelector = <T>(selector: string, MyClass: new () => T): T => {
  const elt = document.querySelector(selector);
  console.log("elt: %O", elt);
  if (!(elt instanceof MyClass)) {
    throw new Error("Cannot find element at selector " + selector);
  }
  return elt;
};

export type Millisecond = number;

export const sleep = (delay: Millisecond) =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
