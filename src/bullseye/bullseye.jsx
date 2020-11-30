import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './bullseye.css';

/**
 * Represents a round circle that resembles a bullseye and is often used on a
 * timeline. The circle can be solid or empty.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays an empty bullseye.
 * <Bullseye />
 * @example
 * // Displays a solid bullseye.
 * <Bullseye solid />
 * @returns {HTMLElement} An HTML element representing a bullseye.
 */
export default function Bullseye(props) {
  const { className, solid } = props;

  let style = 'bullseye-empty';
  if (solid) {
    style = 'bullseye-solid';
  }

  return (
    <div className={classnames('bullseye', style, className)} />
  );
}

Bullseye.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Indicates whether the bullseye is solid. True if solid; otherwise, false if empty (default) */
  solid: PropTypes.bool,
};

Bullseye.defaultProps = {
  className: null,
  solid: false,
};
