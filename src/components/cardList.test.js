import countList from './count.js';

describe('ListCounter', () => {
  test('should count the number of items in the array', () => {
    // arrange
    const list = [{
      id: 2,
    }];

    // act

    const count = countList(list);

    // assert
    expect(count).toBe(1);
  });
});
