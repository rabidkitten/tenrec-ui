import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TagCloudTag from '../tag-cloud-tag/tag-cloud-tag';
import './tag-cloud.css';
import TagCloudHelper from './tag-cloud-helper';

/**
 * Represents a tag cloud or a group of tags that are sized based on how common
 * those tags are in relation to other tags. For example, a tag cloud that is
 * based on the type of pets may have 10 dogs, 20 cats, and 4 birds. Three tags
 * will be displayed, one for Dogs, one for Cats, and one for Birds. The
 * font-size of the Dogs tag will appear smaller than Cats, but larger than
 * Birds.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <TagCloud tags={[{tag: "dogs", value: 10}, {tag: "cats", value: 20},
 * {tag: "birds", value: 4}]} />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function TagCloud(props) {
  const { className, tags } = props;

  // Calculate the total of all tag values. This will be used to calculate the
  // percentage of tag in relation to other tags.
  const total = TagCloudHelper.calculateTotal(tags);

  const elements = tags.map((tag) => {
    const size = TagCloudHelper.getTagSize(total, tag.value);

    return <TagCloudTag key={tag.tag} size={size} tag={tag.tag} />;
  });

  return (
    <div className={classnames('tag-cloud', className)}>
      {elements}
    </div>
  );
}

export default TagCloud;

TagCloud.propTypes = {
  /** Specifies an array of JSON key/value pairs, one pair for each tag with the
   * name of the tag and popularity of the tag. For example: { tag: 'birds', value: 4 } */
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The class to apply to the resulting element. */
  className: PropTypes.string,
};

TagCloud.defaultProps = {
  className: null,
};
