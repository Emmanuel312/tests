function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

test('If i sum 5 + 3 and after sub 3 the result it should be 5', () => {
  const result = sub(sum(5, 3), 3);

  expect(result).toBe(5);
});
