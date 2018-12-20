export const AppState = {
  axisPointsOne: [150, 250, 550, 650], // Tis our AA' axe coordinates
  axisPointsTwo: [300, 300, 400, 600], // Tis our BB'' axe coordinates
  axisPointsThree: [200, 400, 500, 500], // Tis our CC'' axe coordinates
  axeStroke: '#0091EA',
  axeStrokeWidth: 0.5,
  circleRadius: 5,
  circlePoints: [350, 450], // this is our middle circle coordinates
  color: '#000',
  showGrid: true,
  gridStrokeWidth: 0.5,
  gridStroke: '#ced4da',
  height: window.innerHeight,
  isTriangleActive: true,
  isPolygonActive: false,
  isSquareActive: false,
  lineAxeOne: [150, 250, 550, 650], // this is our AA' line separator coordinates
  lineAxeTwo: [300, 300, 500, 500], // this is our BB' line separator coordinates
  lineAxeThree: [200, 400, 400, 600], // this is CC' left line separator coordinates
  linePoints: [750, 50, 200, 600], // this is our main line separator coordinates
  lineStroke: '#1DE9B6',
  lineStrokeWidth: 0.5,
  midPointStroke: '#D50000',
  midPointStrokeWidth: 5,
  midPointShadowBlur: 5,
  midPointRadius: 5,
  squareNodeA: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
  },
  squareNodeB: {
    A: "A'",
    B: "B'",
    C: "C'",
    D: "D'",
  },
  triangleNodeA: {
    A: 'A',
    B: 'B',
    C: 'C',
  },
  triangleNodeB: {
    A: "A'",
    B: "C'",
    C: "B'",
  },
  pointSize: 30,
  blueShapeStroke: 'blue',
  greenShapeStroke: 'green',
  showPoints: true,
  toggleLine: false,
  triangleOpacity: 0.5,
  triangleShadowBlur: 5,
  triangleStrokeWidth: 5,
  triangleStroke: '#555',
  // triangleA is our left triangle coordinates
  triangleA: [
    { x: 150, y: 250 },
    { x: 300, y: 300 },
    { x: 200, y: 400 },
  ],
  // triangleB is our right triangle coordinates
  triangleB: [
    { x: 550, y: 650 },
    { x: 500, y: 500 },
    { x: 400, y: 600 },
  ],
  width: window.innerWidth,
};

export default AppState;
