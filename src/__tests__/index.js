import setCustomProperties from '../index';

// The tests do not run in the browser, so instead we mock the node and the
// methods called by the tested function.
const createMockedNode = () => {
  const props = {};
  const node = {
    style: {
      setProperty: (key, value) => {
        props[key] = value;
      },
    },
  };

  return { node, props };
};

test('setCustomProperties has a default node', () => {
  // Here we're only checking whether the function throws if we don't pass in a
  // node; it should default to the root HTML element.
  setCustomProperties({ color: 'red' });
});

test('setCustomProperties with empty props', () => {
  const { node, props } = createMockedNode();
  setCustomProperties({}, node);
  expect(props).toEqual({});
});

test('setCustomProperties with simple props', () => {
  const { node, props } = createMockedNode();
  setCustomProperties({
    text: 'red',
    background: 'blue',
  }, node);
  expect(props).toEqual({
    '--text': 'red',
    '--background': 'blue',
  });
});

test('setCustomProperties with camelcased props', () => {
  const { node, props } = createMockedNode();
  setCustomProperties({
    myProperty: 'red',
    myOtherProperty: 'blue',
  }, node);
  expect(props).toEqual({
    '--my-property': 'red',
    '--my-other-property': 'blue',
  });
});
