import { camelToKebab } from '../utils';

test('camelToKebab', () => {
  expect(camelToKebab('camelCase')).toEqual('camel-case');
  expect(camelToKebab('veryLongName')).toEqual('very-long-name');
  expect(camelToKebab('already-camelcased')).toEqual('already-camelcased');

  // camelToKebab does not enforce the validity of the output if the input is
  // not camelcased:
  expect(camelToKebab('UPPERCASE')).toEqual('-u-p-p-e-r-c-a-s-e');
  expect(camelToKebab('with Spaces')).toEqual('with -spaces');
});
