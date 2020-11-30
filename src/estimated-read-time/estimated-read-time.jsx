import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import TextHelper from '../text-helper';
import './estimated-read-time.css';

/**
 * Represents a component that displays the estimated number of minutes it takes
 * for an adult to read a specified amount of text.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays 1 min read
 * <EstimatedReadTime text="This is an example." caption="min read" />
 * @example
 * // Displays 1
 * <EstimatedReadTime text="This is an example." />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function EstimatedReadTime(props) {
  const { template, text } = props;

  const wordCount = TextHelper.getEstimatedWordCount(text);
  const readTime = TextHelper.getEstimatedReadTime(wordCount);

  let caption;
  if (template) {
    caption = template.replace('{time}', readTime);
  } else {
    caption = readTime;
  }

  return (
    <span className="estimated-read-time">
      <FontAwesomeIcon className="estimated-read-time-icon" icon={['far', 'clock']} />
      {caption}
    </span>
  );
}

export default EstimatedReadTime;

EstimatedReadTime.propTypes = {
  /** Specifies the template text used to display the calculated estimated
   * number of minutes. Use {time} as the token. */
  template: PropTypes.string,

  /** Specifies the text on which to estimate the read time. */
  text: PropTypes.string.isRequired,
};

EstimatedReadTime.defaultProps = {
  template: null,
};
