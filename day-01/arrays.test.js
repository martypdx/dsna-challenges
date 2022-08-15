function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

test('array push', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = push(arr, 'd');
  expect(arr).toEqual(['a', 'b', 'c', 'd']);
  expect(newLength).toBe(4);
});

function unshift(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr.length;
}

`['a', 'b', 'c'], 'd'` | `4` | `['d', 'a', 'b', 'c']`;

test('array unshift', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = unshift(arr, 'd');
  expect(arr).toEqual(['d', 'a', 'b', 'c']);
  expect(newLength).toBe(4);
});
