import TextHelper from './text-helper';

describe('getEstimatedWordCount', () => {
  it('returns zero if the text argument is undefined or null or empty string.', () => {
    expect(TextHelper.getEstimatedWordCount(undefined)).toBe(0);
    expect(TextHelper.getEstimatedWordCount(null)).toBe(0);
    expect(TextHelper.getEstimatedWordCount('')).toBe(0);
  });

  it('returns one if the text argument only contains punctuation.', () => {
    expect(TextHelper.getEstimatedWordCount('.?,')).toBe(1);
  });

  it('returns one if the text argument only contains one word.', () => {
    expect(TextHelper.getEstimatedWordCount('hello')).toBe(1);
  });

  it('returns the number of words contained in the text argument.', () => {
    expect(TextHelper.getEstimatedWordCount('This should return five words.')).toBe(5);
  });
});

describe('getEstimatedReadTime', () => {
  it('returns zero if the wordCount argument is undefined or null or zero.', () => {
    expect(TextHelper.getEstimatedReadTime(undefined)).toBe(0);
    expect(TextHelper.getEstimatedReadTime(null)).toBe(0);
    expect(TextHelper.getEstimatedReadTime(0)).toBe(0);
  });

  it('returns one minute if the wordCount argument is 100 words.', () => {
    expect(TextHelper.getEstimatedReadTime(100)).toBe(1);
  });

  it('returns two minutes if the wordCount argument is 200 words.', () => {
    expect(TextHelper.getEstimatedReadTime(100)).toBe(1);
  });

  it('returns one minute if the wordCount argument is less than 100 words (but not zero).', () => {
    expect(TextHelper.getEstimatedReadTime(99)).toBe(1);
    expect(TextHelper.getEstimatedReadTime(1)).toBe(1);
  });
});
