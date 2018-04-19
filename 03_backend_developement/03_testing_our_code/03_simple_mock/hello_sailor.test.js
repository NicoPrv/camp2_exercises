const helloSailor = require ("./hello_sailor.js");


test("it should call console.log one time", () => {
  console.log = jest.fn();
  helloSailor("Capitaine Haddock");
  expect(console.log).toHaveBeenCalled();
});

test("it should return the right value", () => {
  console.log = jest.fn();
  helloSailor("Capitaine Haddock");
  expect(console.log).toHaveBeenCalledWith("Howdy Capitaine Haddock!");
});

test("it should work even for empty case", () => {
  console.log = jest.fn();
  helloSailor("");
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
