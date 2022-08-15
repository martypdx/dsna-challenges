test('object keys', () => {
  const pet = {
    ['name']: 'fido',
    ['type']: 'dog',
    ['isCute']: true,
    ['99@#$%#$%^&&!!! wow what a key']: 'this works',
  };

  expect(pet).toEqual({
    name: 'fido',
    type: 'dog',
    isCute: true,
    '99@#$%#$%^&&!!! wow what a key': 'this works',
  });

  expect(pet).toEqual({
    name: 'fido',
    type: 'dog',
    isCute: true,
    '99@#$%#$%^&&!!! wow what a key': 'this works',
  });

  //a-z|A-Z|0-9 as long as number is not first character

  pet['name'] = 'garfield';
  pet['type'] = 'cat';
  pet['isCute'] = false;
  pet['99@#$%#$%^&&!!! wow what a key'] = 'still works';

  expect(pet).toEqual({
    name: 'garfield',
    type: 'cat',
    isCute: false,
    '99@#$%#$%^&&!!! wow what a key': 'still works',
  });

  pet.name = 'duchess';
  pet.type = 'cat';
  pet.isCute = true;
  pet['99@#$%#$%^&&!!! wow what a key'] = 'still works...';

  expect(pet).toEqual({
    name: 'duchess',
    type: 'cat',
    isCute: true,
    '99@#$%#$%^&&!!! wow what a key': 'still works...',
  });
});

test('dynamic object properties', () => {
  const pet = {
    name: 'felix',
    lives: 9,
  };

  let prop = 'name';
  expect(pet[prop]).toBe('felix');
  prop = 'lives';
  pet[prop]--;
  expect(pet[prop]).toBe(8);
});

test('lookup or map', () => {
  const cats = [
    (felix = { name: 'felix', lives: 8 }),
    (garfield = { name: 'garfield', lives: 4 }),
    (duchess = { name: 'duchess', lives: 9 }),
    (tom = { name: 'tom', lives: 1 }),
  ];

  const catMap = {};

  for (cat of cats) {
    catMap[cat.name] = cat;
  }

  //   const catMap = {
  //     felix,
  //     garfield,
  //     duchess,
  //     tom,
  //   };

  let name = 'tom';
  expect(catMap[name]).toBe(tom);
});

// function inventoryChecker(inventory, { itemName }) {
//   const qty = inventory[itemName];
//   return qty > 5 ? 'plenty of inventory' : `running low on ${itemName}`;
// }

const pet1 = { name: 'felix', lives: 9 };
const pet2 = { name: 'duchess', lives: 9 };

let { name, lives } = pet1;

function inventoryChecker(inventory, { itemName }) {
  return inventory[itemName] > 5
    ? 'plenty of inventory'
    : `running low on ${itemName}`;
}

test('inventory checker', () => {
  const inventory = {
    eggs: 24,
    bananas: 3,
    grapes: 12,
  };

  const { eggs, ...rest } = inventory;

  expect(rest).toEqual({ bananas: 3, grapes: 12 });

  expect(inventoryChecker(inventory, { itemName: 'grapes' })).toBe(
    'plenty of inventory'
  );

  expect(inventoryChecker(inventory, { itemName: 'bananas' })).toBe(
    'running low on bananas'
  );
});

test('parameter/argument spreading', () => {
  function doThing(first, ...args) {
    return args;
  }

  expect(doThing(1, 3, 6)).toEqual([3, 6]);

  function add(x, y, z) {
    return x + y + z;
  }

  const numbers = [23, 5, 3];
  expect(add(...numbers)).toBe(31);

  const [, , z] = numbers;
  expect(z).toBe(3);
});

test('odd case of dynamic object destructing', () => {
  const pet = {
    name: 'felix',
    lives: 9,
    type: 'tuxedo',
  };

  const getValue = (prop) => {
    const { [prop]: value } = pet;
    return value;
  };

  expect(getValue('lives')).toBe(9);
  expect(getValue('type')).toBe('tuxedo');
});
