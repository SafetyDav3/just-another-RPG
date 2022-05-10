const Potion = require("../lib/Potion.js");

test("Creates a health potion object", () => {
  const potion = new Potion("health");
  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});

test("Creates a strength potion object", () => {
  const potion = new Potion("strength");
  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
test("Creates a agility potion object", () => {
  const potion = new Potion("agility");
  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
