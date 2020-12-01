import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './divider.css';

/**
 * Displays a line with optional text in the center.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component as a single, thin line, with no text.
 * <Divider />
 *
 * @example
 * // Displays the component as a single, thin line, with text.
 * <Divider text="Good Eats" />
 *
 * @example
 * // Displays the component as a dotted line with text.
 * <Divider text="Good Eats" type="dotted" />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Divider(props) {
  const { text, type, className } = props;

  let textElement = null;
  if (text) {
    textElement = (<span className="divider-text">{text}</span>);
  }

  let typeClassName = '';
  if (type === 'thick') {
    typeClassName = 'divider-thick-line';
  } else if (type === 'dotted') {
    typeClassName = 'divider-dotted-line';
  } else if (type === 'dashed') {
    typeClassName = 'divider-dashed-line';
  }

  return (
    <div className={classnames('divider', typeClassName, className)}>
      {textElement}
    </div>
  );
}

export default Divider;

Divider.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Specifies the text to display on the line. */
  text: PropTypes.string,

  /** Specifies the type of line to draw. One of 'thick', 'dotted', or 'dashed';
   * otherwise, none to show a solid line. */
  type: PropTypes.string,
};

Divider.defaultProps = {
  className: null,
  text: null,
  type: null,
};
