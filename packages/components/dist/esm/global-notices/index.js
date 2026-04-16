/**
 * External dependencies
 */
import { parse } from 'qs';

/**
 * Internal dependencies
 */
import { Notice } from '../';
import { jsx as _jsx } from "react/jsx-runtime";
var GlobalNotices = function GlobalNotices() {
  var notice = parse(window.location.search)['newspack-notice'];
  if (!notice) {
    return null;
  }
  return notice.split(',').map(function (text, i) {
    if (text.indexOf('_error_') === 0) {
      return /*#__PURE__*/_jsx(Notice, {
        isError: true,
        noticeText: text.replace('_error_', ''),
        rawHTML: true
      }, i);
    }
    return /*#__PURE__*/_jsx(Notice, {
      isSuccess: true,
      noticeText: text
    }, i);
  });
};
export default GlobalNotices;