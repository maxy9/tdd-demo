// it('Should return new position and direction of rover', () => {
//   assert.equal(dropRover(coordinates, direction), { coordinates: [1,1], direction: 'North'});
// });

// describe("when turn right instruction is provided", () => {
//   it('should change compass direction clockwise and maintain position', () => {
//     const { coordinates, direction } = moveRover('R');
//     assert.equal(position, 0);
//     assert.equal(direction, '');
//   });
// });

// describe("when turn left instruction is provided", () => {
//   it("should change compass direction anticlockwise and maintain position", () => {
//     const { coordinates, direction } = moveRover("L");
//     assert.equal(position, 0);
//     assert.equal(direction, "");
//   });
// });

// describe("when go forward one step instruction is provided", () => {
//   it("should maintain compass direction and change position", () => {
//     const { coordinates, direction } = moveRover("F");
//     assert.equal(position, 0);
//     assert.equal(direction, "");
//   });
// });

// describe("when turn right instruction is provided", () => {
//   it("should maintain compass direction and change position", () => {
//     const { coordinates, direction } = moveRover("B");
//     assert.equal(position, 0);
//     assert.equal(direction, "");
//   });
// });

// describe("when invalid instruction is provided", () => {
//   it("should return un-changed position and direction", () => {
//     const { coordinates, direction } = moveRover("A");
//     assert.equal(position, 0);
//     assert.equal(direction, "");
//   });
// });

// describe('when multiple instructions are provide', () => {
//   it('should follow all the instructions given in left to right order', () => {
//     const { coordinates, direction } = moveRover("RFLRBFLRFLB");
//     assert.equal(position, 0);
//     assert.equal(direction, "");
//   })
// })
