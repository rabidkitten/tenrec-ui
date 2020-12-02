/**
 * Contains static methods for working with tags and tag clouds.
 */
class TagCloudHelper {
  /**
   * Calculates the total value of all tags.
   *
   * @param {Array} tags An array of tags.
   * @example
   * // Returns 34
   * calculateTotal([{tag: "dogs", value: 10}, {tag: "cats", value: 20},
   * {tag: "birds", value: 4}]);
   * @returns {number} The total value of all tags.
   */
  static calculateTotal(tags) {
    if (!tags || !Array.isArray(tags) || !tags.length) {
      return 0;
    }

    const reducer = (accumulator, currentValue) => (
      Number.isFinite(accumulator) ? accumulator : this.getTagValue(accumulator))
      + this.getTagValue(currentValue);

    return tags.reduce(reducer);
  }

  /**
   * Calculates the tag size based on the value of the specified tag and the
   * total of all tags.
   *
   * @param {number} total The total value of all tags.
   * @param {number} value The value of the current tag.
   * @example
   * @returns {number} A value from 1 to 5 indicating the size of the tag in
   * relation to other tags.
   */
  static getTagSize(total, value) {
    if (!Number.isFinite(total) || !Number.isFinite(value)) {
      return 1;
    }

    if (value < 0) {
      return 1;
    }

    if (value > total) {
      return 5;
    }

    return Math.min(Math.trunc(Math.trunc((value / total) * 100) / 20) + 1, 5);
  }

  /**
   * Gets the value of the specified tag.
   *
   * @param {object} tag The tag.
   * @example
   * // Returns 10
   * getTagValue({ tag: "dog", value: 10 })
   * @returns {number} The value of the tag.
   */
  static getTagValue(tag) {
    if (!tag || !Number.isFinite(tag.value)) {
      return 0;
    }

    return tag.value;
  }
}

export default TagCloudHelper;
