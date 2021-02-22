export const AppState = {
  blockSnapSize: 50,
  open: false,
  axisPointsOne: [150, 250, 550, 650], // Tis our AA' axe coordinates
  axisPointsTwo: [300, 300, 400, 600], // Tis our BB'' axe coordinates
  axisPointsThree: [200, 400, 500, 500], // Tis our CC'' axe coordinates
  axeStroke: '#0091EA',
  axeStrokeWidth: 0.5,
  circleRadius: 5,
  circlePoints: [425, 325], // this is our middle circle coordinates
  openModal: false,
  color: '#000',
  gridStrokeWidth: 0.5,
  gridStroke: '#ced4da',
  isTriangleActive: true,
  isPolygonActive: false,
  isSquareActive: false,
  kind: 'triangle',
  linePoints: [700, 50, 200, 550], // this is our main line separator coordinates
  lineStroke: '#1DE9B6',
  lineStrokeWidth: 0.5,
  midPointStroke: '#D50000',
  midPointStrokeWidth: 5,
  midPointShadowBlur: 5,
  midPointRadius: 3,
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
  pointSize: 20,
  blueShapeStroke: 'blue',
  greenShapeStroke: 'green',
  toggleLine: true,
  triangleOpacity: 0.5,
  triangleShadowBlur: 5,
  triangleStrokeWidth: 5,
  triangleStroke: '#555',
  // triangleA is our left triangle coordinates
  triangleA: [
    { x: 200, y: 100 },
    { x: 350, y: 150 },
    { x: 250, y: 250 },
  ],
  // triangleB is our right triangle coordinates
  triangleB: [
    { x: 650, y: 550 },
    { x: 600, y: 400 },
    { x: 500, y: 500 },
  ],
  height: window.innerHeight,
  width: window.innerWidth,
};

export default AppState;
