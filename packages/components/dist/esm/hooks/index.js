/**
 * WordPress dependencies
 */
import { useRef } from '@wordpress/element';
import usePrompt from './usePrompt';
import useObjectState from './useObjectState';
import useOnClickOutside from './useOnClickOutside';
import useConfirmDialog from './use-confirm-dialog';
var useUniqueId = function useUniqueId(prefix) {
  var id = useRef("".concat(prefix, "-").concat(Math.round(Math.random() * 99999)));
  return id.current;
};
export default {
  usePrompt: usePrompt,
  useObjectState: useObjectState,
  useOnClickOutside: useOnClickOutside,
  useUniqueId: useUniqueId,
  useConfirmDialog: useConfirmDialog
};