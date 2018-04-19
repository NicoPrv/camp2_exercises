const toWords = require ("./to_words");


test("Check the happy path", function() {
  const result = toWords("Salut. ça va bien ?");
  expect(result).toEqual(["Salut","ça","va","bien"]);
});

test("Check empty case", function() {
  const result = toWords("");
  expect(result).toEqual([]);
});

test("Check undefined case", function() {
  const result = toWords(undefined);
  expect(result).toEqual(null);
});
