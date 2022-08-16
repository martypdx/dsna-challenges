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

const toTitle = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();

function titleCase(sentence) {
  return sentence.split(/\s+/).map(toTitle).join(' ');
}

test('title cases words', () => {
  const actual = titleCase('alchemy ROCKS goLD');
  expect(actual).toBe('Alchemy Rocks Gold');
});

test('title cases words normalizes extra spaces', () => {
  const actual = titleCase('alchemy   ROCKS        goLD');
  expect(actual).toBe('Alchemy Rocks Gold');
});

test('replace hyphens with asterisk', () => {
  const input = 'kebob-case-rules';
  expect(input.replace(/-/gi, '*')).toBe('kebob*case*rules');
});

function uniqueString2(strings) {
  const norm = strings
    .map((string, i) => {
      return {
        string: [...new Set(string.toLowerCase())].join(''),
        index: i,
      };
    })
    .sort(({ string: a }, { string: b }) => (a === b ? 0 : a < b ? -1 : 1));

  if (norm[0].string !== norm[1].string) return strings[norm[0].index];
  return strings[norm[norm.length - 1].index];
}
// n + n + (logn n) + 3 + n + 1
// (3 + logN)n + 4
// logN * n
function uniqueString(strings) {
  // n
  const lower = strings.map((s) => s.toLowerCase());
  // n
  const dedup = lower.map((s) => [...new Set(s.toLowerCase())].sort().join(''));
  // n * logN
  const sort = dedup.sort();

  // 3
  const find = sort[0] !== sort[1] ? sort[0] : sort[sort.length - 1];

  // n
  const index = lower.findIndex((s) => s.includes(find));

  // 1
  return strings[index];
}

function uniqueChar(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i]))
      return string[i];
  }

  return '_';
}

function uniqueString(booger) {
  const newBoog = booger.map((str) => {
    return [...new Set(str.toLowerCase())].sort().join('');
  });
  // n * 2n = 2n^2 ==> O(n^2)
  for (let i = 0; i < newBoog.length; i++) {
    //n
    // n + n = 2n
    if (newBoog.indexOf(newBoog[i]) === newBoog.lastIndexOf(newBoog[i]))
      return booger[i];
  }
}

test('unique string single character', () => {
  const input = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
  const expected = 'BbBb';

  expect(uniqueString(input)).toBe(expected);
});

test('unique string single character', () => {
  const input = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'];
  const expected = 'foo';

  expect(uniqueString(input)).toBe(expected);
});
