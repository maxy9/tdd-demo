
let roverCoordinates = [0,0];
let roverDirection = 'North';

const dropRover = (coordinates, direction) => {
  roverCoordinates = coordinates;
  roverDirection = direction;
    return { coordinates: roverCoordinates, direction: roverDirection };
};

const directionChanges = {
  North: { L: "West", R: "East" },
  East: { L: "North", R: "South" },
  South: { L: "East", R: "West" },
  West: { L: "South", R: "North" },
};

const positionChanges = {
  North: { coordinatesArrayIndex: 1, F: +1, B: -1 },
  East: { coordinatesArrayIndex: 0, F: +1, B: -1 },
  South: { coordinatesArrayIndex: 1, F: -1, B: +1 },
  West: { coordinatesArrayIndex: 0, F: -1, B: +1 },
};

const moveRover = (directives) => {
  Array.from(directives).forEach((directive) => {
    roverDirection =
      directionChanges[roverDirection][directive] ?? roverDirection;

    const index = positionChanges[roverDirection].coordinatesArrayIndex;
    const positionValue = roverCoordinates[index];
    roverCoordinates[index] = positionChanges[roverDirection][directive]
      ? positionValue + positionChanges[roverDirection][directive]
      : roverCoordinates[index];
  });

  return { coordinates: roverCoordinates, direction: roverDirection };
};
const moveRover_backup = (directive) => {
  roverDirection =
    directionChanges[roverDirection][directive] ?? roverDirection;

  const index = positionChanges[roverDirection].coordinatesArrayIndex;
  const positionValue = roverCoordinates[index];
  roverCoordinates[index] = positionChanges[roverDirection][directive]
    ? positionValue + positionChanges[roverDirection][directive]
    : roverCoordinates[index];

  return { coordinates: roverCoordinates, direction: roverDirection };
};

module.exports = {
  dropRover,
  moveRover,
};