function multiplesOfN(n, max = 50) {
  const numbers = [];
  // ( initializer ; comparison; post-loop state change)
  for (let i = n; i <= max; i += n) {
    numbers.push(i);
  }

  return numbers;
}
function multiplesOfNDesc(n, max = 50) {
  const numbers = [];
  // ( initializer ; comparison; post-loop state change)
  for (let i = max; i >= n; i -= n) {
    numbers.push(i);
  }

  return numbers;
}

test('multiples of n', () => {
  expect(multiplesOfNDesc(5)).toEqual([50, 45, 40, 35, 30, 25, 20, 15, 10, 5]);
});

test('');
