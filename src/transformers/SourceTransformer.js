/* ============
 * Source Transformer
 * ============
 *
 * The transformer for the source.
 */

import Transformer from './Transformer';

export default class SourceTransformer extends Transformer {
  /**
   * State loading
   * @returns {{list: Array, error: boolean, loading: boolean}}
   */
  static loading() {
    return {
      list: [],
      error: false,
      loading: true,
    };
  }

  /**
   * List sources
   * @param response
   * @returns {{list: *|{}|sources, loading: boolean}}
   */
  static all(response) {
    return {
      list: response.sources,
      loading: false,
    };
  }
  /**
   * State Error
   * @param message
   * @returns {{loading: boolean, error: {message: *}}}
   */
  static error(error) {
    return {
      loading: false,
      error,
    };
  }
}
