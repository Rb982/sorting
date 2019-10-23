describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'sortLogic').and.callThrough();
  });
  it('handles an empty array', function() {
    const emptyArr = bubbleSort([]);
    expect(emptyArr).toEqual([]);
  });
  it('sorts an array of words', function() {
    const wordArr = bubbleSort(['train', 'zebra', 'sushi', 'apple']);
    expect(wordArr).toEqual(['apple', 'sushi', 'train', 'zebra']);
    expect(sortLogic.calls.count()).toEqual(5);
  });
});

describe('Sorting numbers', function() {
  beforeAll(function() {
    spyOn(window, 'sortLogic').and.callThrough();
  });
  it('sorts an array of numbers', function() {
    const numArr = bubbleSort([5, -1, 200, 60]);
    expect(numArr).toEqual([-1, 5, 60, 200]);
    expect(sortLogic.calls.count()).toEqual(2);
  });
});
