const addX = (x) => (y) => x + y;

function addX2(x) {
  return function (y) {
    return x + y;
  };
}

test('addX', () => {
  const add5 = addX(5);
  expect(add5(3)).toBe(8);
  expect(add5(6)).toBe(11);

  const add8 = addX(8);
  expect(add8(3)).toBe(11);
  expect(add8(6)).toBe(14);
});

const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

test('addPunctuation', () => {
  const addExcitement = addPunctuation('!!!');
  expect(addExcitement('pikachu')).toBe('pikachu!!!');
  expect(addExcitement('alchemy')).toBe('alchemy!!!');

  const addUnsure = addPunctuation('?!?');
  expect(addUnsure('pikachu')).toBe('pikachu?!?');
  expect(addUnsure('alchemy')).toBe('alchemy?!?');
});
