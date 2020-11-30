import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './embossed-heading.css';

/**
 * Represents text that appears in front of a embossed single-character letter.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <EmbossedHeading text="Good Eats" embossedLetter="g" />
 * @returns {HTMLElement} An HTML element representing an embossed heading.
 */
function EmbossedHeading(props) {
  const { className, text, embossedLetter } = props;

  return (
    <div className={classnames('embossed-heading', className)}>
      <div className="embossed-heading-letter">
        {embossedLetter}
      </div>
      <div className="embossed-heading-text">
        {text}
      </div>
    </div>
  );
}

export default EmbossedHeading;

EmbossedHeading.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Specifies the single letter that appears embossed behind the text. */
  embossedLetter: PropTypes.string.isRequired,

  /** Specifies the text that appears in front of the embossed letter. */
  text: PropTypes.string.isRequired,
};

EmbossedHeading.defaultProps = {
  className: null,
};
