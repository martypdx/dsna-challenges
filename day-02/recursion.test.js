function sumAll2(n) {
  if (n === 0) return 0;
  return n + sumAll(n - 1);
}

const sumAll = (n) => (!n ? 0 : n + sumAll(n - 1));

test('sumAll recursive', () => {
  // 5 + 4 + 3 + 2 + 1 = 15
  expect(sumAll(5)).toBe(15);
});

function fizzBuzz2(x) {
  const results = [];

  function recurse(n) {
    if (n > x) return;
    let value = '';
    if (n % 3 === 0) value += 'Fizz';
    if (n % 5 === 0) value += 'Buzz';
    results.push(value || n);
    recurse(n + 1);
  }

  recurse(1);

  return results;
}

function fizzBuzz(n) {
  // console.log('calling with', n);
  // exit
  if (!n) return [];

  // necessary "per item" work
  let value = '';
  if (n % 3 === 0) value += 'Fizz';
  if (n % 5 === 0) value += 'Buzz';
  value = value || n;

  // call recursively and integrate return value
  const recursiveReturn = fizzBuzz(n - 1);
  const result = [...recursiveReturn, value];
  // console.log('result at', n, 'is', recursiveReturn, value);
  // console.log('result is', result);
  return result;
}

test('fizz buzz recursive', () => {
  expect(fizzBuzz(16)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
  ]);
});
