// largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10

// largestEven([1, 3, 5, 7]) ➞ -1

// largestEven([0, 19, 18973623]) ➞ 0

/* Imperative */

function largestEven1(nums) {
  // setup
  let maxEven = -1;

  // looping
  for (num of nums) {
    // check for right condition
    if (num % 2 !== 0) continue;

    if (num > maxEven) maxEven = num;
  }

  // post-process

  // return a result
  return maxEven;
}

/* Declarative */
function largestEven2(nums) {
  return nums.reduce((maxEven, num) => {
    return num % 2 === 0 && num > maxEven ? num : maxEven;
  }, -1);
}

/* Recrusive */
function largestEven(nums, maxEven = -1) {
  if (!nums.length) return maxEven;
  const num = nums.pop();
  if (num % 2 === 0 && num > maxEven) maxEven = num;
  return largestEven(nums, maxEven);
}

test('largest even', () => {
  expect(largestEven1([3, 7, 2, 1, 7, 9, 10, 13])).toBe(10);
  expect(largestEven1([1, 3, 5, 7])).toBe(-1);
  expect(largestEven1([0, 19, 18973623])).toBe(0);
});

test('largest even', () => {
  expect(largestEven2([3, 7, 2, 1, 7, 9, 10, 13])).toBe(10);
  expect(largestEven2([1, 3, 5, 7])).toBe(-1);
  expect(largestEven2([0, 19, 18973623])).toBe(0);
});

test('largest even', () => {
  expect(largestEven([3, 7, 2, 1, 7, 9, 10, 13])).toBe(10);
  expect(largestEven([1, 3, 5, 7])).toBe(-1);
  expect(largestEven([0, 19, 18973623])).toBe(0);
});

function sayIt(sentence) {
  function recurse(word) {
    if (word === undefined) return sentence;
    sentence += ' ' + word;
    return recurse;
  }
  return recurse;
}

// const make = (s) => (w) => !w ? s : make((s ? ' ' : '') + w);
// const sayIt = make('');

test('say it', () => {
  const result = sayIt('hello')('my')('name')('is')('JavaScript')();
  expect(result).toBe('hello my name is JavaScript');
});

function repeat1(string, times) {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function repeat2(string, times) {
  if (!times) return '';
  return repeat(string, times - 1) + string;
}

const repeat = (s, t) => (t || '') && repeat(s, --t) + s;

test('repeat string', () => {
  expect(repeat('ab', 3)).toBe('ababab');
  expect(repeat('kiwi', 1)).toBe('kiwi');
  expect(repeat('cherry', 2)).toBe('cherrycherry');
});
