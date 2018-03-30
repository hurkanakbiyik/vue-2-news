/* ============
 * Headline Transformer
 * ============
 *
 * The transformer for the headline.
 */

import Transformer from './Transformer';

/**
 * Default values for headline
 * @type {{author: string, title: string, description: string, url: string, urlToImage: string,
 * publishedAt: string, source: {id: string, name: string}}}
 */
const defaultValues = {
  author: 'Default Author',
  title: 'Default Title',
  description: 'Default Desc',
  url: 'http://ikas.com.tr',
  urlToImage: 'http://ikas.com.tr/ikas2.png',
  publishedAt: new Date().toISOString(),
  source: {
    id: 'default',
    name: 'Default',
  },
};

export default class HeadlineTransformer extends Transformer {

  /**
   * Start loading
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
   *  List
   * @param response
   * @returns {{list, loading: boolean}}
   */
  static all(response) {
    const keys = Object.keys(defaultValues);
    const articles = response.articles.map((article) => {
      keys.forEach((key) => {
        if (article[key] === undefined || article[key] === null
          || article[key] === '') {
          article[key] = defaultValues[key];
        }
      });
      return article;
    });
    return {
      list: articles,
      loading: false,
    };
  }

  /**
   * Error handling
   * @param error
   * @returns {{loading: boolean, error: {message: *}}}
   */
  static error(error) {
    return {
      loading: false,
      error,
    };
  }
}
