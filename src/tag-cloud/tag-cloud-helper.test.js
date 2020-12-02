import TagCloudHelper from './tag-cloud-helper';

describe('calculateTotal', () => {
  it('returns zero if the tags argument is undefined or null or not an array.', () => {
    expect(TagCloudHelper.calculateTotal(undefined)).toBe(0);
    expect(TagCloudHelper.calculateTotal(null)).toBe(0);
    expect(TagCloudHelper.calculateTotal('Not an array.')).toBe(0);
  });

  it('returns zero if the tags argument is an empty array.', () => {
    expect(TagCloudHelper.calculateTotal([])).toBe(0);
  });

  it('calculates the total of all tag values.', () => {
    expect(TagCloudHelper.calculateTotal([
      { tag: 'dogs', value: 10 },
      { tag: 'cats', value: 20 },
      { tag: 'birds', value: 4 },
    ])).toBe(34);
  });

  it('does not include an element that does not have a value in the result.', () => {
    expect(TagCloudHelper.calculateTotal([
      { tag: 'dogs', value: 10 },
      { tag: 'cats' },
      { name: 'invalid' },
      { tag: 'birds', other: 4 },
    ])).toBe(10);
  });
});

describe('getTagSize', () => {
  it('returns 1 if the total is null, undefined, or not a number.', () => {
    expect(TagCloudHelper.getTagSize(null, 0)).toBe(1);
    expect(TagCloudHelper.getTagSize(undefined, 1)).toBe(1);
    expect(TagCloudHelper.getTagSize('1', 19)).toBe(1);
  });

  it('returns 1 if the value is null, undefined, or not a number.', () => {
    expect(TagCloudHelper.getTagSize(100, null)).toBe(1);
    expect(TagCloudHelper.getTagSize(100, undefined)).toBe(1);
    expect(TagCloudHelper.getTagSize(100, '19')).toBe(1);
  });

  it('returns 1 if the the value is between 0 and 19, percentage wise.', () => {
    expect(TagCloudHelper.getTagSize(100, 0)).toBe(1);
    expect(TagCloudHelper.getTagSize(100, 1)).toBe(1);
    expect(TagCloudHelper.getTagSize(100, 19)).toBe(1);
  });

  it('returns 2 if the the value is between 20 and 39, percentage wise.', () => {
    expect(TagCloudHelper.getTagSize(100, 20)).toBe(2);
    expect(TagCloudHelper.getTagSize(100, 39)).toBe(2);
  });

  it('returns 3 if the the value is between 40 and 59, percentage wise.', () => {
    expect(TagCloudHelper.getTagSize(100, 40)).toBe(3);
    expect(TagCloudHelper.getTagSize(100, 59)).toBe(3);
  });

  it('returns 4 if the the value is between 60 and 79, percentage wise.', () => {
    expect(TagCloudHelper.getTagSize(100, 60)).toBe(4);
    expect(TagCloudHelper.getTagSize(100, 79)).toBe(4);
  });

  it('returns 5 if the the value is between 80 and 100, percentage wise.', () => {
    expect(TagCloudHelper.getTagSize(100, 80)).toBe(5);
    expect(TagCloudHelper.getTagSize(100, 100)).toBe(5);
  });

  it('returns 5 if the the value is greater than the total.', () => {
    expect(TagCloudHelper.getTagSize(100, 101)).toBe(5);
  });

  it('returns 1 if the the value is less than zero.', () => {
    expect(TagCloudHelper.getTagSize(100, -1)).toBe(1);
  });
});

describe('getTagValue', () => {
  it('returns zero if the tag argument is undefined or null.', () => {
    expect(TagCloudHelper.getTagValue(undefined)).toBe(0);
    expect(TagCloudHelper.getTagValue(null)).toBe(0);
  });

  it('return zero if there is no value property on the specified tag.', () => {
    expect(TagCloudHelper.getTagValue({ tag: 'Cat' })).toBe(0);
  });

  it('return the value of the value property on the specified tag.', () => {
    expect(TagCloudHelper.getTagValue({ tag: 'Cat', value: 10 })).toBe(10);
  });
});
