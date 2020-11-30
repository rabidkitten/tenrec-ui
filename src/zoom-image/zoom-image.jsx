import React from 'react';
import PropTypes from 'prop-types';
import './zoom-image.css';

/**
 * Represents an image that zooms in slightly when the mouse is hovered over it.
 *
 * @param {*} props The properties of the component.
 * @example
 * <ZoomImage imageUrl="./mouse.jpg" alt="Mouse" className="mouse" />
 * @returns {HTMLElement} An HTML element that displays the image.
 */
function ZoomImage(props) {
  let elements = null;

  const { imageUrl, alt, className } = props;

  elements = (
    <div className={`zoom-image ${className || ''}`}>
      <img className="zoom-image-image" src={imageUrl} alt={alt} />
    </div>
  );

  return elements;
}

export default ZoomImage;

ZoomImage.propTypes = {
  /** The absolute or relative URL of the image to display. */
  imageUrl: PropTypes.string.isRequired,

  /** The alternate text to appear for the image. */
  alt: PropTypes.string.isRequired,

  /** The class to apply to the resulting element. */
  className: PropTypes.string,
};

ZoomImage.defaultProps = {
  className: null,
};
