export const AppState = {
  width: 1000,
  height: 750,
  color: '#000',
  displayed: false,
  showPoints: false,
  toggleLine: false,
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
  linePoints: [680, 50, 200, 600],
  circlePoints: [350, 450],
};

export default AppState;
