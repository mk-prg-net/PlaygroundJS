define(['./baseIsEqual', '../get', '../hasIn'], function(baseIsEqual, get, hasIn) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used to compose bitmasks for comparison styles. */
  var UNORDERED_COMPARE_FLAG = 1,
      PARTIAL_COMPARE_FLAG = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new function.
   */
  function baseMatchesProperty(path, srcValue) {
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
    };
  }

  return baseMatchesProperty;
});
