/**
 * Contains static methods for working with text strings.
 */
class TextHelper {
  /**
   * Assembles an array of words into text using a single space to divide the
   * words.
   *
   * @param {string[]} words An array of words.
   * @returns {string} Text containing the words, each separated by a single
   * space.
   */
  static combineWords(words) {
    if (Array.isArray(words)) {
      return words.join(' ');
    }

    return '';
  }

  /**
   * Gets the estimated number of words in the specified text.
   *
   * @param {string} text The specified text.
   * @returns {number} The estimated number of words in the text or 0 if there are no words.
   */
  static getEstimatedWordCount(text) {
    if (text) {
      return this.getWords(text).length;
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

  /**
   * Returns the first word in the specified text.
   *
   * @param {string} text The text.
   * @returns {string} The first word in the specified text; otherwise, an empty
   * string if there are no words.
   */
  static getFirstWord(text) {
    if (text && text.length) {
      return this.getWords(text)[0];
    }

    return '';
  }

  /**
   * Accepts text and returns the specified word and all words after that word.
   *
   * @param {string} text The text.
   * @param {number} index The zero based index of the word to return and all
   * words after that index.
   * @example
   * // Returns dog went home.
   * getSubsequentWord('The dog went home.', 1);
   * @returns {string} The specified word and all words after that word.
   */
  static getSubsequentWords(text, index) {
    if (index < 0) {
      return '';
    }

    let words = this.getWords(text);
    if (words.length - 1 < index) {
      return '';
    }

    words = words.slice(index);

    return this.combineWords(words);
  }

  /**
   * Separates the specified text into words and returns an array containing the
   * words.
   *
   * @param {string} text The text.
   * @returns {string[]} The array containing the words; otherwise, an empty
   * array if there are not words.
   */
  static getWords(text) {
    if (text && text.length) {
      return text.split(' ');
    }

    return [];
  }
}

export default TextHelper;
