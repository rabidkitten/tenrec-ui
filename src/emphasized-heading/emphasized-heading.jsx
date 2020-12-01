import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextHelper from '../text-helper';
import './emphasized-heading.css';

/**
 * Displays a heading where the first word is emphasized/bolded and second or
 * subsequent words are not. The component looks best when there are only two
 * words.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <BlockQuote quote="Love is kind." author="Unknown" />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function EmphasizedHeading(props) {
  const { className, text } = props;

  const firstWord = TextHelper.getFirstWord(text);
  const subsequentWords = TextHelper.getSubsequentWords(text, 1);

  return (
    <div className={classnames('emphasized-heading', className)}>
      <strong>
        {firstWord}
      </strong>
      &nbsp;
      {subsequentWords}
    </div>
  );
}

export default EmphasizedHeading;

EmphasizedHeading.propTypes = {
  /** Specifies the text of the heading. It's best if the headings are only two
   * words. */
  text: PropTypes.string.isRequired,

  /** The class to apply to the resulting element. */
  className: PropTypes.string,
};

EmphasizedHeading.defaultProps = {
  className: null,
};
