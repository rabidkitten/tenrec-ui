import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './tag-cloud-tag.css';

/**
 * Displays a tag/word that will be displayed as part of a tag cloud.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <TagCloudTag tag="Toronto" size={3} />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function TagCloudTag(props) {
  const { className, tag } = props;
  let { size } = props;

  // Limit the size is between 1 and 5.
  size = Math.max(size, 1);
  size = Math.min(size, 5);

  return (
    <div className={classnames('tag-cloud-tag', `tag-cloud-tag-size${size}`, className)}>{tag}</div>
  );
}

export default TagCloudTag;

TagCloudTag.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Specifies the tag. */
  tag: PropTypes.string.isRequired,

  /** A number from 1 to 6 (inclusive) that specifies the size of the tag in
   * relation to other tags. */
  size: PropTypes.number.isRequired,
};

TagCloudTag.defaultProps = {
  className: null,
};
