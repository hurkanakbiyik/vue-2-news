/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * auth module.
 */

import Vue from 'vue';
import {
  CHECK,
  REGISTER,
  LOGIN,
  LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED,
} from './mutation-types';

export default {
  [CHECK](state) {
    state.authenticated = !!localStorage.getItem('id_token');
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
    }
  },

  [REGISTER]() {
    //
  },
  [LOGIN](state) {
    state.error = false;
    state.loading = true;
    state.authenticated = false;
  },
  [LOGIN_SUCCESS](state, token) {
    state.authenticated = true;
    state.error = false;
    state.loading = false;
    localStorage.setItem('id_token', token);
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  [LOGIN_FAILED](state, error) {
    state.authenticated = false;
    state.loading = false;
    state.error = error;
    localStorage.removeItem('id_token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem('id_token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
