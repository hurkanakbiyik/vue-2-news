/* ============
 * Actions for the source module
 * ============
 *
 * The actions that are available on the
 * source module.
 */

import SourceTransformer from '../../../transformers/SourceTransformer';
import * as types from './mutation-types';
import SourceProxy from '../../../proxies/SourceProxy';

export const all = ({ commit }) => {
  commit(types.ALL, SourceTransformer.loading());
  new SourceProxy()
    .all()
    .then((response) => {
      if (response.status === 'ok') {
        commit(types.ALL_SUCCESS, SourceTransformer.all(response));
      } else {
        commit(types.ALL_FAILED, SourceTransformer.error({ message: 'Status false' }));
      }
    })
    .catch((error) => {
      // console.error('Request failed...');
      commit(types.ALL_FAILED, SourceTransformer.error(error));
    });
};

export default {
  all,
};
