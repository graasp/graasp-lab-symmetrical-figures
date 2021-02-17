/**
 * This function will determine the values of A and B in a line equation Y = AX + B
 * @param {Array} firstPoint - A point on the Line
 * @param {Array} secondPoint - A second point on the Line
 * @returns {Object} - An object with the two values A and B
 */
export const getLineEquation = (firstPoint, secondPoint) => {
  // y = ax + b
  const sndPoint = [secondPoint[0] + firstPoint[0], secondPoint[1] + firstPoint[1]];
  const a = (sndPoint[1] - firstPoint[1]) / (sndPoint[0] - firstPoint[0]);
  const b = firstPoint[1] - a * firstPoint[0];
  return { a, b };
};

/**
 * This function will determine the values of A and B in a line equation Y = AX + B
 * @param {Array} firstPoint - A point on the Line
 * @param {Array} secondPoint - A second point on the Line
 * @returns {Object} - An object with the two values A and B
 */
export const getLineEquation2 = (firstPoint, secondPoint) => {
  // y = ax + b
  const a = (secondPoint[1] - firstPoint[1]) / (secondPoint[0] - firstPoint[0]);
  const b = firstPoint[1] - a * firstPoint[0];
  return { a, b };
};


/**
 * This function will tell if a given point is on a line regarding that line eqution
 * @param {Array} pointCoordinates - The coordinates of the point
 * @param {Object} lineEquationParams - The values A and B of the line
 * @returns {Boolean} True or False whether the point is on the line or not
 */
export const isPointOnLine = (pointCoordinates, lineEquationParams) => {
  // y = ax + b  => lineEquationParams
  if (
    Math.abs(
      pointCoordinates[1]
            - (lineEquationParams.a * pointCoordinates[0] + lineEquationParams.b),
    ) <= 10
  ) {
    return true;
  }
  return false;
};

/**
 * This function will return the coordinates X and Y of the point in the middle of a Line
 * given the starting and ending point of that Line
 * @param {Array} startPoint - The starting point of the Line
 * @param {Array} endPoint - The ending point of the Line
 * @returns {Array} - The coordinates X and Y of the middle point of the Line
 */
export const middlePointOfLine = (startPoint, endPoint) => [
  parseInt((startPoint[0] + endPoint[0]) / 2, 10),
  parseInt((startPoint[1] + endPoint[1]) / 2, 10),
];


/**
 *
 * @param {Number} x - The X coordinate of the point not on the Line
 * @param {Number} y - The Y coordinate of the point not on the Line
 * @param {Object} lineEquation - The Line Equation
 * @returns {Object} The new pair of coordinates closest to the point on the Line
 */
export const findClosestToPoint = (x, y, lineEquation) => {
  // Line Equation: y = ax + b
  const m = -1 * (1 / lineEquation.a);
  const b = y - m * x;
  const closestX = (b - lineEquation.b) / (lineEquation.a - m);
  const closestY = lineEquation.a * closestX + lineEquation.b;
  return { x: closestX, y: closestY };
};


/**
 * This function determine the distance between two point
 * @param {Array} firstPoint - The coordinates of the first point
 * @param {Array} secondPoint - The coordinates of the second point
 * @returns {Number} - The distance between the two given points
 */
export const distanceBetween = (firstPoint, secondPoint) => Math.sqrt(
  ((secondPoint[0] - firstPoint[0]) * (secondPoint[0] - firstPoint[0]))
    + ((secondPoint[1] - firstPoint[1]) * (secondPoint[1] - firstPoint[1])),
);
