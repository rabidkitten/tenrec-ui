import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BoxTail from '../box-tail/box-tail';
import './time-line-card.css';

/**
 * Displays a card that is used on a timeline to describe an event. An event
 * could be a particular meeting at a time in the day or a workshop or it could
 * be a date on which a company was established.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <TimelineCard title="Established" text="The company was established on January 1, 1990." />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function TimelineCard(props) {
  const {
    boxTailStyle,
    className,
    title,
    subTitle,
    text,
    imageUrl,
  } = props;

  let justification = 'left';
  if (boxTailStyle === 'right') {
    justification = 'right';
  }

  let imageElement = null;
  if (imageUrl) {
    imageElement = (<img src={imageUrl} alt={title} />);
  }

  let tailElement = null;
  if (boxTailStyle !== 'none') {
    tailElement = <BoxTail right={boxTailStyle === 'right'} className={`time-line-card-tail-${justification}`} />;
  }

  return (
    <div className={classnames('time-line-card', className)}>
      <div className="time-line-card-image">
        {imageElement}
      </div>
      <div className="time-line-card-body">
        <div className="time-line-card-title">{title}</div>
        <div className="time-line-card-sub-title">{subTitle}</div>
        <div className="time-line-card-text">{text}</div>
      </div>
      {tailElement}
    </div>
  );
}

export default TimelineCard;

TimelineCard.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** Specifies the relative or absolute URL of an image to display. */
  imageUrl: PropTypes.string,

  /** Indicates the type of box-tail that appears (if any). */
  boxTailStyle: PropTypes.string,

  /** Specifies a sub-title that appears under the title. */
  subTitle: PropTypes.string,

  /** Specifies text that appears in the body of the card. */
  text: PropTypes.string,

  /** Specifies the title. */
  title: PropTypes.string,
};

TimelineCard.defaultProps = {
  boxTailStyle: 'none',
  className: null,
  imageUrl: null,
  subTitle: null,
  text: null,
  title: null,
};
