import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './block-quote.css';

/**
 * Displays a quotation and the attributing author.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <BlockQuote quote="Love is kind." author="Unknown" />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function BlockQuote(props) {
  const { className, quote, author } = props;

  return (
    <div className={classnames('block-quote', className)}>
      <div className="block-quote-quotation-mark">“</div>
      <div className="block-quote-quote">{quote}</div>
      <div className="block-quote-author">{author}</div>
    </div>
  );
}

export default BlockQuote;

BlockQuote.propTypes = {
  /** Specifies the author of the quote. If unknown, it is recommend you simply
   * specify "Unknown". */
  author: PropTypes.string.isRequired,

  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Specifies the quote. */
  quote: PropTypes.string.isRequired,
};

BlockQuote.defaultProps = {
  className: null,
};
