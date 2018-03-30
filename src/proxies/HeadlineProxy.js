import Proxy from './Proxy';

class HeadlineProxy extends Proxy {
  /**
   * The constructor for the HeadlineProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('top-headlines', parameters);
  }
}

export default HeadlineProxy;
