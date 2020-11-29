import React from 'react';
import PropTypes from 'prop-types';
import './box-tail.css';

/**
 * Represents a triangle meant to appear at the right or left of a rectangle; in
 * essence a tail.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays a tail that points to the left.
 * <BoxTail />
 * @example
 * // Displays a tail that points to the right.
 * <Bullseye right />
 * @returns {HTMLElement} An HTML element representing a tail.
 */
function BoxTail(props) {
  const { right, className } = props;

  let style = 'box-tail-left';
  if (right) {
    style = 'box-tail-right';
  }

  return (
    <div className={`box-tail ${style} ${className || ''}`} />
  );
}

export default BoxTail;

BoxTail.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Indicates whether the box tail shows on the right or left. True if it
   * shows on the right; otherwise, false if it shows on the left (default) */
  right: PropTypes.bool,
};

BoxTail.defaultProps = {
  className: null,
  right: false,
};
