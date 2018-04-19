const greet = require ("./greeting") ;

test("greet name works", function() {
  const result = greet("Bob");
  expect(result).toBe("Hello BOB!");
});

test("greet name works if I don't send a name", function() {
  const result = greet();
  expect(result).toBe("Hello WORLD!");
});
