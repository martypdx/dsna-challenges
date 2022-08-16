// map
// filter

function map(arr, fn) {
  const mapped = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    const transformed = fn(arr[i], i, arr);
    mapped.push(transformed);
  }

  return mapped;
}

function filter(arr, predicate) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item, i, arr)) filtered.push(item);
  }

  return filtered;
}

test('maps an array', () => {
  const arr = [1, 6, 5];

  const actual = map(arr, (n) => n ** 2);

  expect(actual).toEqual([1, 36, 25]);
});

test('maps skips holes', () => {
  const arr = [1, , , 5];

  const actual = map(arr, (n) => n);

  expect(actual).toEqual([1, 5]);
});

test('filter an array', () => {
  expect(filter([2, 6, 5], (n) => n % 2 === 0)).toEqual([2, 6]);
});

// find, findIndex, indexOf, some, every, includes
function about(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    // condition met??
    return; // something
    // otherwise keep looping
  }

  return; // default: false, null, etc.;
}

function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    const item = arr[i];
    // "exception case"
    if (!predicate(item)) return false;
  }

  // "exhaustive case"
  return true;
}

function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    const item = arr[i];
    // "found case"
    if (predicate(item)) return true;
  }
  ``;

  // "exhaustive case"
  return false;
}

test('every true', () => {
  expect(every([2, 6, 10], (n) => n % 2 === 0)).toBe(true);
  expect(every([2, 5, 10], (n) => n % 2 === 0)).toBe(false);
  expect(every([2, , , , 4, 8], (n) => n % 2 === 0)).toBe(true);
});

test('some true', () => {
  expect(some([1, 6, 9], (n) => n % 2 === 0)).toBe(true);
  expect(some([1, 5, 9], (n) => n % 2 === 0)).toBe(false);
});

// const found = arr.find((n) => n === 3);
// const included = arr.includes(3);
