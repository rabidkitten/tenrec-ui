/**
 * Contains static methods for working with text strings.
 */
class TextHelper {
  /**
   * Gets the estimated number of words in the specified text.
   *
   * @param {string} text The specified text.
   * @returns {number} The estimated number of words in the text or 0 if there are no words.
   */
  static getEstimatedWordCount(text) {
    if (text) {
      return text.split(' ').length;
    }

    return 0;
  }

  /**
   * Gets the number of minutes that it would take an adult to read the
   * specified number of words. Note, that most adults read between 100-200
   * words per minute.
   *
   * @param {number} wordCount The number of words.
   * @returns {number} The time in minutes for an adult to read the specified
   * number of words.
   */
  static getEstimatedReadTime(wordCount) {
    const wordsPerMinute = 100;

    if (wordCount) {
      return Math.ceil(wordCount / wordsPerMinute);
    }

    return 0;
  }
}

export default TextHelper;
