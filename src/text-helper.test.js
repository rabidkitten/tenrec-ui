import TextHelper from './text-helper';

describe('combineWords', () => {
  it('returns an empty string if the words argument is undefined or null or not an array.', () => {
    expect(TextHelper.combineWords(undefined)).toBe('');
    expect(TextHelper.combineWords(null)).toBe('');
    expect(TextHelper.combineWords(0)).toBe('');
    expect(TextHelper.combineWords('Not an array.')).toBe('');
  });

  it('returns an empty string if the words argument is an empty array.', () => {
    expect(TextHelper.combineWords([])).toBe('');
  });

  it('returns a single word without any spacing, if the words argument only contains a single word.', () => {
    expect(TextHelper.combineWords(['one'])).toBe('one');
  });

  it('does not remove punctuation (such as periods) from words in the words argument.', () => {
    expect(TextHelper.combineWords(['one.'])).toBe('one.');
  });

  it('returns multiple words separated by spaces, when the words argument contains multiple words.', () => {
    expect(TextHelper.combineWords(['one', 'two', 'three'])).toBe('one two three');
  });
});

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

describe('getFirstWord', () => {
  it('returns an empty string if the text argument is undefined or null or an empty string.', () => {
    expect(TextHelper.getFirstWord(undefined)).toBe('');
    expect(TextHelper.getFirstWord(null)).toBe('');
    expect(TextHelper.getFirstWord('')).toBe('');
  });

  it('returns a string containing the only word, when the text argument contains only a single word.', () => {
    expect(TextHelper.getFirstWord('dog')).toBe('dog');
  });

  it('returns a string containing the first word, when the text argument contains several words.', () => {
    expect(TextHelper.getFirstWord('The dog is friendly.')).toBe('The');
  });

  it('does not remove punctuation from the first word.', () => {
    expect(TextHelper.getFirstWord('dogs, cats, and birds')).toBe('dogs,');
  });
});

describe('getSubsequentWords', () => {
  it('returns an empty string the index is less than zero.', () => {
    expect(TextHelper.getSubsequentWords('The dog is pink.', -1)).toBe('');
  });

  it('returns an empty string if the text argument is undefined or null or an empty string.', () => {
    expect(TextHelper.getSubsequentWords(undefined)).toBe('');
    expect(TextHelper.getSubsequentWords(null)).toBe('');
    expect(TextHelper.getSubsequentWords('')).toBe('');
  });

  it('returns an empty string if the index argument is greater than the number of words in the text argument.', () => {
    expect(TextHelper.getSubsequentWords('The dog is pink.', 4)).toBe('');
  });

  it('returns the last word if the index argument is equal to the number of words in the text argument.', () => {
    expect(TextHelper.getSubsequentWords('The dog is pink.', 3)).toBe('pink.');
  });

  it('returns the full string if the index argument is zero.', () => {
    expect(TextHelper.getSubsequentWords('The dog is pink.', 0)).toBe('The dog is pink.');
  });

  it('returns words after the word specified by the index argument.', () => {
    expect(TextHelper.getSubsequentWords('The dog is pink.', 1)).toBe('dog is pink.');
  });
});

describe('getWords', () => {
  it('returns an empty array if the text argument is undefined or null or an empty string.', () => {
    expect(TextHelper.getWords(undefined)).toEqual([]);
    expect(TextHelper.getWords(null)).toEqual([]);
    expect(TextHelper.getWords('')).toEqual([]);
  });

  it('returns an array containing a single word if the text is a single word.', () => {
    expect(TextHelper.getWords('dog')).toEqual(['dog']);
  });

  it('returns an array containing each word in the text.', () => {
    expect(TextHelper.getWords('Dogs are fun.')).toEqual(['Dogs', 'are', 'fun.']);
  });
});
