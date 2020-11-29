import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/**
 * Represents a copyright year or range of two copyright years. For example:
 * 2010 or 2010-2020
 *
 * @param {*} props The properties of the component.
 * @example
 * // Returns the current year. For example: 2020
 * <CopyrightYear />
 * @example
 * // Returns the specified year hyphenated with the current year. For example: 2010-2020
 * <CopyrightYear baseYear={2010} />
 * @returns {HTMLElement} An HTML element containing the year or year range.
 */
function CopyrightYear(props) {
  const { baseYear } = props;
  const currentYear = moment().year();

  let copyrightYear = null;
  if (!baseYear || currentYear === baseYear) {
    copyrightYear = currentYear;
  } else {
    copyrightYear = `${baseYear}-${currentYear}`;
  }

  return (
    <span>{copyrightYear}</span>
  );
}

export default CopyrightYear;

CopyrightYear.propTypes = {
  /** The first copyright year. For example: 2010 */
  baseYear: PropTypes.number,
};

CopyrightYear.defaultProps = {
  baseYear: null,
};
