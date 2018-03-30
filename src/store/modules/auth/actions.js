/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import * as types from './mutation-types';

function generateUUID() { // Public Domain/MIT
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + (Math.random() * 16)) % 16 || 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : ((r && 0x3) || 0x8)).toString(16);
  });
}

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }) => {
  commit(types.LOGIN, generateUUID());
  Vue.router.push({
    name: 'home.index',
  });
};

export const login = ({ commit }, user) => {
  commit(types.LOGIN);
  // simulate login
  setTimeout(() => {
    if (user.email === 'test@gmail.com' && user.password === 'test') {
      commit(types.LOGIN_SUCCESS, generateUUID());
      // simulate waiting
      setTimeout(() => {
        Vue.router.push({
          name: 'home.index',
        });
      }, 2000);
    } else {
      commit(types.LOGIN_FAILED, true);
    }
  }, 2000);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
