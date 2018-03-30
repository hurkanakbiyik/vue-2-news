/* ============
 * Actions for the headline module
 * ============
 *
 * The actions that are available on the
 * Headline module.
 */

import HeadlineTransformer from '../../../transformers/HeadlineTransformer';
import * as types from './mutation-types';
import HeadlineProxy from '../../../proxies/HeadlineProxy';

export const all = ({ commit }, params) => {
  commit(types.ALL, HeadlineTransformer.loading());
  new HeadlineProxy(params)
    .all()
    .then((response) => {
      if (response.status === 'ok') {
        commit(types.ALL_SUCCESS, HeadlineTransformer.all(response));
      } else {
        commit(types.ALL_FAILED, HeadlineTransformer.error({ message: 'Status false' }));
      }
    })
    .catch((error) => {
      // console.error('Request failed...');
      commit(types.ALL_FAILED, HeadlineTransformer.error({ error }));
    });
};

export default {
  all,
};
