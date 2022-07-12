const { assert } = require('chai');
const { dropRover, moveRover } = require("./rover");

describe('Mars Rover', () => {
  describe('When given an initial set of coordinates and direction', () => {
    it('Should return the rover\'s coordinates and direction', () => {
      const coordinates = [4,7];
      const direction = 'South';
      assert.deepEqual(dropRover(coordinates, direction), {
        coordinates: [4, 7],
        direction: "South",
      });
    });
  });
  
  describe("When facing north", () => {
    const direction = "North";

    beforeEach(() => {
      dropRover([4, 7], direction);
    })

    describe("When instructed to turn left", () => {
      const directive = "L";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "West",
        });
      });
    });

    describe("When instructed to turn right", () => {
      const directive = "R";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "East",
        });
      });
    });

    describe("When instructed to move forward", () => {
      const directive = "F";

      it("Should increase the y coordinate by 1", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 8],
          direction,
        });
      });
    });
  });
  
  describe("When facing east", () => {
    const direction = "East";

    beforeEach(() => {
      dropRover([4, 7], direction);
    });

    describe("When instructed to turn left", () => {
      const directive = "L";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "North",
        });
      });
    });

    describe("When instructed to turn right", () => {
      const directive = "R";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "South",
        });
      });
    });
  });
  
  describe("When facing south", () => {
    const direction = "South";

    beforeEach(() => {
      dropRover([4, 7], direction);
    });

    describe("When instructed to turn left", () => {
      const directive = "L";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "East",
        });
      });
    });

    describe("When instructed to turn right", () => {
      const directive = "R";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "West",
        });
      });
    });
  });
  
  describe("When facing west", () => {
    const direction = "West";

    beforeEach(() => {
      dropRover([4, 7], direction);
    });

    describe("When instructed to turn left", () => {
      const directive = "L";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "South",
        });
      });
    });

    describe("When instructed to turn right", () => {
      const directive = "R";

      it("Should face the correct direction but not change position", () => {
        assert.deepEqual(moveRover(directive), {
          coordinates: [4, 7],
          direction: "North",
        });
      });
    });
  });
});
