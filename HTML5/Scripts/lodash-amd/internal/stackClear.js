define([], function() {

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = { 'array': [], 'map': null };
  }

  return stackClear;
});
