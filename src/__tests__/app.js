import ArrayBufferConverter from '../app';
import getBuffer from '../getbuffer';

test('Testing ArrayBufferConverter', () => {
  const converter = new ArrayBufferConverter(getBuffer());
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(converter.toString()).toEqual(expected);
});
