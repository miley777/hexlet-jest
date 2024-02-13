import reverse from '../src/index.js';


test('reverse', () => {
  const str = 'hello';
  expect(reverse(str)).split('').toEqual('olleh');
});
