const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplica 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('divide 6 * 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});
