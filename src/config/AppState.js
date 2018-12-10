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
  triangleA: [
    { x: 150, y: 250 },
    { x: 300, y: 300 },
    { x: 200, y: 400 },
  ],
  triangleB: [
    { x: 550, y: 650 },
    { x: 500, y: 500 },
    { x: 400, y: 600 },
  ],
  linePoints: [750, 50, 200, 600],
  lineAxeOne: [150, 250, 550, 650],
  lineAxeTwo: [300, 300, 500, 500],
  lineAxeThree: [200, 400, 400, 600],
  circlePoints: [350, 450],
  axePointsOne: [150, 250, 550, 650],
  axePointsTwo: [300, 300, 400, 600],
  axePointsThree: [200, 400, 500, 500],
};

export default AppState;
