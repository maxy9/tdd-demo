let coordinates = [0, 0];
let direction = "North";

const dropRover = (coords, dir) => {
  coordinates = coords;
  direction = dir;
  return { coordinates, direction };
};

const directionChanges = {
  North: { L: "West", R: "East" },
  East: { L: "North", R: "South" },
  South: { L: "East", R: "West" },
  West: { L: "South", R: "North" },
};
const updateDirection = (directive) =>
  (direction = directionChanges[direction][directive] ?? direction);

const positionChanges = {
  North: { coordinatesArrayIndex: 1, F: +1, B: -1 },
  East: { coordinatesArrayIndex: 0, F: +1, B: -1 },
  South: { coordinatesArrayIndex: 1, F: -1, B: +1 },
  West: { coordinatesArrayIndex: 0, F: -1, B: +1 },
};
const updatePosition = (directive) => {
  const index = positionChanges[direction].coordinatesArrayIndex;
  const positionValue = coordinates[index];
  coordinates[index] = positionChanges[direction][directive]
    ? positionValue + positionChanges[direction][directive]
    : coordinates[index];
};

const moveRover = (directives) => {
  Array.from(directives).forEach((directive) => {
    updateDirection(directive);
    updatePosition(directive);
  });

  return { coordinates, direction };
};

module.exports = {
  dropRover,
  moveRover,
};
