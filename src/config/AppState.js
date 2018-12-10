export const AppState = {
  width: window.innerWidth,
  height: window.innerHeight,
  color: '#000',
  displayed: false,
  showPoints: false,
  toggleLine: true,
  nodeA: {
    A: 'A',
    B: 'B',
    C: 'C',
  },
  nodeB: {
    A: "A'",
    B: "C'",
    C: "B'",
  },
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
  linePoints: [750, 50, 200, 600], // this is our main line separator coordinates
  lineAxeOne: [150, 250, 550, 650], // this is our AA' line separator coordinates
  lineAxeTwo: [300, 300, 500, 500], // this is our BB' line separator coordinates
  lineAxeThree: [200, 400, 400, 600], // this is CC' left line separator coordinates
  circlePoints: [350, 450], // this is our middle circle coordinates
  axePointsOne: [150, 250, 550, 650], // Tis our AA' axe coordinates
  axePointsTwo: [300, 300, 400, 600], // Tis our BB'' axe coordinates
  axePointsThree: [200, 400, 500, 500], // Tis our CC'' axe coordinates
  triangleOpacity: 0.5,
  triangleStroke: '#555',
  shapeStroke: '#000',
  triangleShadowBlur: 5,
  triangleStrokeWidth: 5,
  circleRadius: 5,
};

export default AppState;
