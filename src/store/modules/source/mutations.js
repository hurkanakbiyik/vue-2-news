/* ============
 * Mutations for the source module
 * ============
 *
 * The mutations that are available on the
 * source module.
 */

import { ALL, ALL_SUCCESS, ALL_FAILED } from './mutation-types';

export default {
  [ALL](state, result) {
    state.error = result.error;
    state.list = result.list;
    state.loading = result.loading;
  },
  [ALL_SUCCESS](state, result) {
    state.error = false;
    state.list = result.list;
    state.loading = result.loading;
  },
  [ALL_FAILED](state, result) {
    state.error = result.error;
    state.list = [];
    state.loading = result.loading;
  },
};
