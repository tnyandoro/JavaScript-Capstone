import { countComments } from './commentList.js';

describe('CommentCounter', () => {
  test('should count the number of items in the array', () => {
    // arrange
    const comments = [{
      id: 2,
      username: 'Me',
      comment: 'food',
    }];

    // act

    const count = countComments(comments);

    // assert
    expect(count).toBe(1);
  });
});
