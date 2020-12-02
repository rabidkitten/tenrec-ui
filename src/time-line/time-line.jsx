import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Bullseye from '../bullseye/bullseye';
import TimelineCard from '../time-line-card/time-line-card';
import './time-line.css';

/**
 * Displays a time line with zero or more events, each event represented by a
 * bullseye and a time card. This component is useful for event listings as well
 * as growth timelines, etc.
 *
 * @param {*} props The properties of the component.
 * @example
 * // Displays the component.
 * <TimeLine events={[ { title: "Company Established" },
 *  { title: "Reached 50 Employees" },
 *  { title: "Reached $1M Sales Revenue" } ]}
 * />
 * @returns {HTMLElement} An HTML element representing the component.
 */
function TimeLine(props) {
  const { className, events } = props;

  /**
   * Gets the direction of the box-tail that appears on the time line card.
   *
   * @param {number} index The zero-based index of the event on the time line.
   * @returns 'left' if the box-tail should appear on the left; otherwise,
   * 'right'.
   */
  function getTailDirection(index) {
    if (index % 2 === 0) {
      return 'right';
    }

    return 'left';
  }

  /**
   * Creates a time card.
   *
   * @param {object} item The time card data.
   * @param {number} index The index of the time card on the time line.
   * @param {boolean} isDisplayed Indicates whether to display the time card or
   * not.
   * @returns {HTMLElement} The time card.
   */
  function getTimeCard(item, index, isDisplayed) {
    return (
      <>
        { isDisplayed
          ? (
            <TimelineCard
              title={item.title}
              text={item.text}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
              boxTailStyle={getTailDirection(index)}
            />
          )
          : null }
      </>
    );
  }

  /**
   * Creates a row in the grid.
   *
   * @param {object} item The time card data.
   * @param {number} index The index of the time card on the time line.
   * @returns {HTMLElement} The time card.
   */
  function getGridRow(item, index) {
    return (
      <Fragment key={index}>
        <div className="time-line-card-left">
          { getTimeCard(item, index, index % 2 === 0) }
        </div>
        <div className="time-line-line">
          <Bullseye className="time-line-bullseye" solid />
        </div>
        <div className="time-line-card-right">
          { getTimeCard(item, index, index % 2 !== 0) }
        </div>
      </Fragment>
    );
  }

  let elements = null;
  if (events) {
    elements = events.map((item, index) => (
      getGridRow(item, index)
    ));
  }

  return (
    <div className={classnames('time-line', className)}>
      {elements}
    </div>
  );
}

export default TimeLine;

TimeLine.propTypes = {
  /** The class to apply to the resulting element. */
  className: PropTypes.string,

  /** An array containing events that appear along the timeline. Each event is a
   * JSON object that contains an optional title, subTitle, text, and imageUrl.
   */
  events: PropTypes.arrayOf(PropTypes.object),
};

TimeLine.defaultProps = {
  className: null,
  events: [],
};
