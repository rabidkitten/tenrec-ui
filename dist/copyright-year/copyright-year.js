"use strict";

var _interopRequireDefault = require("/Volumes/Mac/Addiction/website/tenrec-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

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
  var baseYear = props.baseYear;
  var currentYear = (0, _moment["default"])().utc().year();
  var copyrightYear = null;

  if (currentYear === baseYear) {
    copyrightYear = currentYear;
  } else {
    copyrightYear = "".concat(baseYear, "-").concat(currentYear);
  }

  return /*#__PURE__*/_react["default"].createElement("span", null, copyrightYear);
}

var _default = CopyrightYear;
exports["default"] = _default;