import Proxy from './Proxy';

class SourceProxy extends Proxy {
  /**
   * The constructor for the SourceProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('sources', parameters);
  }
}

export default SourceProxy;
